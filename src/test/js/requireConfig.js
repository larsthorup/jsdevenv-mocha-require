/*global require*/
require.config({
    baseUrl: '../js',

    paths: {
        sinon: '../test/lib/sinon-1.10.2'
    },

    shim: {
        sinon: { exports: 'sinon'}
    }
});
