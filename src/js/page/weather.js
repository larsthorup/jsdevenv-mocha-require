/*global define, window*/
define(function(require) {
    'use strict';
    var $ = require('jquery');
    var css = require('text!style/weather.css');
    var template = require('text!template/weather-forecast.html');

    var weather = {};

    weather.render = function (context, data) {
        var p = $(template).appendTo(context).text(data.text);
        window.setTimeout(function () {
            p.addClass('blink');
        }, 900);
    };

    weather.style = function () {
        $('<style>' + css + '</style>').appendTo($('head'));
    };

    weather.fetch = function (query) {
//        if(false) {
//            return {
//                then: function (callback) {
//                    callback({text: 'sunny'});
//                }
//            };
//        }

        return $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            data: {q: query},
            dataType: 'jsonp'
        }).then(function (data) {
            return {
                text: data.weather[0].description
            };
        });
    };

    weather.listen = function (context) {
        context.find('#city').on('change', function () {
            var city = $(this);
            weather.fetch(city.val()).then(function (data) {
                weather.render(context, data);
                weather.style(context);
            });
        });
    };

    return weather;
});