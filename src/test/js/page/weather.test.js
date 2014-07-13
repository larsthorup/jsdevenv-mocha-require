/*global define, describe, beforeEach, afterEach, it*/
define(function(require) {
    'use strict';
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var multiline = require('multiline');
    var $ = require('jquery');
    var weather = require('js/page/weather');
    require('mockjax');

    describe('weather', function () {
        var sandbox;
        var fixture;

        beforeEach(function () {
            sandbox = sinon.sandbox.create({useFakeTimers: true});
            fixture = $('<div id="fixture"></div>').appendTo('body');
        });

        afterEach(function () {
            $.mockjaxClear();
            sandbox.restore();
            fixture.remove();
        });

        it('renders', function () {

            // given
            var context = $('<div></div>');
            var weatherData = { text: 'rain' };

            // when
            weather.render(context, weatherData);

            // then
            var p = context.find('p');
            expect(p.text()).to.equal('rain');
            expect(p.hasClass('blink')).to.equal(false);

            // when
            sandbox.clock.tick(900);

            // then
            expect(p.hasClass('blink')).to.equal(true);
        });

        it('styles', function () {
            // given
            var context = $('<div></div>').appendTo(fixture); // Note: need to be in the DOM for styles to apply
            var weatherData = { text: 'rain' };
            weather.render(context, weatherData);

            // when
            weather.style(context);

            // then
            var p = context.find('p');
            expect(p.css('color')).to.equal('rgb(0, 0, 255)');
        });

        it('fetches', function (done) {
            // given
            $.mockjax({
                logging: false,
                url: 'http://api.openweathermap.org/data/2.5/weather',
                data: {q: 'Denver'},
                responseText: {
                    weather: [
                        {
                            description: 'sun'
                        }
                    ]
                },
                responseTime: 1
            });

            // when
            var fetching = weather.fetch('Denver');

            // then
            fetching.then(function (data) {
                expect(data.text).to.equal('sun');
                done();
            });
        });

        it('listens', function () {
            // given
            var context = $(multiline(function () {/*
                <div>
                    <input type="text" id="city" />
                </div>
            */}));
            var city = context.find('#city');
            sandbox.stub(weather, 'fetch').returns({
                then: function(callback) {
                    callback({text: 'foggy'});
                }
            });
            sandbox.stub(weather, 'render').returns();

            // when
            weather.listen(context);
            city.val('San Francisco');
            city.trigger('change');

            // then
            expect(weather.fetch.calledWith('San Francisco')).to.equal(true);
            expect(weather.render.calledWith(context, { text: 'foggy' })).to.equal(true);
        });
    });

});