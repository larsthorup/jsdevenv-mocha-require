/*global define, describe, beforeEach, afterEach, it*/
define(function (require) {
    'use strict';
    var sinon = require('sinon');
    var expect = require('chai').expect;
    require('js/util/random');

    describe('util.random', function () {

        beforeEach(function () {
            sinon.stub(Math, 'random').returns(0.85);
        });

        afterEach(function () {
            Math.random.restore();
        });

        describe('randomBelow', function () {

            it('works for some abitrary number', function () {
                expect(Math.randomBelow(6)).to.equal(5);
            });

            it('works for 1', function () {
                expect(Math.randomBelow(1)).to.equal(0);
            });

            it('fails for 0', function () {
                expect(function () { Math.randomBelow(0); }).to.throw('invalid argument: 0');
            });

        });

    });

});