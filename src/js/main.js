/*global require*/

// Note: first configure RequireJS itself
require(['require.conf'], function () {
    'use strict';

    // Note: then load all styles into the DOM
    require(['css!style/menu'], function () {

        // Note: finally load markup into the DOM
        require(['jquery', 'text!template/menu.html', 'text!template/weather.html', 'js/page/weather'], function ($, menuHtml, weatherHtml, weather) {
            $('body').append(menuHtml);
            $('body').append(weatherHtml);
            weather.listen($('#weather'));
        });

    });

});