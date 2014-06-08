/*global require, describe, beforeEach, afterEach, it, expect*/
require(['sinon', 'util/random'], function (sinon) {
    'use strict';

    describe('util.random', function () {

        beforeEach(function () {
            sinon.stub(Math, 'random').returns(0.85);
        });

        afterEach(function () {
            Math.random.restore();
        });

        describe('randomBelow', function () {

            it('works for some abitrary number', function () {
                expect(Math.randomBelow(6)).toBe(5);
            });

            it('works for 1', function () {
                expect(Math.randomBelow(1)).toBe(0);
            });

            it('fails for 0', function () {
                expect(function () { Math.randomBelow(0); }).toThrow('invalid argument: 0');
            });

        });

    });

});