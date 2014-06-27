/*global require*/
require.config({
    baseUrl: '', // Note: all paths relative to src folder
    paths: {
        jquery: 'lib/jquery/dist/jquery',
        css: 'lib/require-css/css',
        text: 'lib/requirejs-text/text'
    },
    shim: {
        jquery : { exports: '$'}
    }
});

// Note: enable to debug issues in module loading
//require.onResourceLoad = function (context, map) { /*, depArray*/
//    window.console.log('Loaded ' + map.url);
//};
