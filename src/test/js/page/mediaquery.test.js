/*global define, describe, beforeEach, afterEach, it*/
define(['chai', 'jquery'], function (chai, $) {
    'use strict';
    var expect = chai.expect;

    describe('media query', function () {
        var fixture;
        var iframe;
        var context;

        beforeEach(function () {
            fixture = $('<div id="fixture"></div>').appendTo('body');
            iframe = $('<iframe></iframe>').appendTo(fixture); // Note: need to be in the DOM for styles to apply
            context = $(iframe.get(0).contentDocument);
            $('<style>@media(max-width: 600px) { h1 { color: red; } }</style>').appendTo(context.find('head'));
            $('<style>@media(min-width: 601px) { h1 { color: blue; } }</style>').appendTo(context.find('head'));
            $('<h1>Hello world</h1>').appendTo(context.find('body'));
        });

        afterEach(function () {
            fixture.remove();
        });

        it('should turn blue when wide', function () {
            // when
            iframe.attr('width', '700px');

            // then
            expect(context.find('h1').css('color')).to.equal('rgb(0, 0, 255)');
        });

        it('should turn red when narrow', function () {
            // when
            iframe.attr('width', '500px');

            // then
            expect(context.find('h1').css('color')).to.equal('rgb(255, 0, 0)');
        });
    });
});