/*global require*/
require.config({
    paths: {
        jquery: '../lib/jquery-2.1.1'
    },
    shim: {
        jquery : { exports: '$'}
    }
});

// Note: enable to debug issues in module loading
//require.onResourceLoad = function (context, map) { /*, depArray*/
//    window.console.log('Loaded ' + map.url);
//};
