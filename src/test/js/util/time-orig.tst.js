/*global define, describe, it*/
define(function (require) {
    'use strict';
    var expect = require('chai').expect;
    var time = require('util/time-orig');

    describe('util.time', function () {

        describe('durationInEnglish', function () {

            it('should return seconds', function () {
                var then = new Date(2014, 6, 6, 7, 12, 14);
                var now = new Date(2014, 6, 6, 7, 12, 20);
                var text = time.durationInEnglish(now - then);
                expect(text).to.equal('6 seconds ago');
            });

        });

    });
});