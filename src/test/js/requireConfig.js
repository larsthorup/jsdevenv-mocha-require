/*global require*/
require.config({
    baseUrl: '../js',

    paths: {
        sinon: '../test/lib/sinon-1.10.2',
        chai: '../test/lib/chai-1.9.1'
    },

    shim: {
        sinon: { exports: 'sinon'}
    }
});
