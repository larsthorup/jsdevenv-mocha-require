/*global define, window*/
define(['jquery'], function ($) {
    'use strict';

    function render(context, data) {
        var p = $('<p></p>').appendTo(context).text(data.text);
        window.setTimeout(function () {
            p.addClass('blink');
        }, 900);
    }

    function style() {
        $('<style>p {color: blue}</style>').appendTo($('head'));
    }

    function fetch(query) {
        if(false) {
            return {
                then: function (callback) {
                    callback({text: 'sunny'});
                }
            };
        }

        return $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            data: {q: query},
            dataType: 'jsonp'
        }).then(function (data) {
            return {
                text: data.weather[0].description
            };
        });
    }

    function listen(context) {
        context.find('#city').on('change', function () {
            var city = $(this);
            weather.fetch(city.val()).then(function (data) {
                weather.render(context, data);
            });
        });
    }

    var weather = {
        render: render,
        style: style,
        fetch: fetch,
        listen: listen
    };

    return weather;
});