/*global require*/

// Note: first configure RequireJS itself
require(['require.conf'], function () {
    'use strict';

    // Note: then load all styles into the DOM
    require(['css!style/menu'], function () {

        // Note: finally load markup into the DOM
        require(['jquery', 'text!template/menu.html'], function ($, menu) {
            $('body').append(menu);
        });

    });

});