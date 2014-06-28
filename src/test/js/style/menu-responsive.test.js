/*global define, describe, beforeEach, afterEach, it*/
define(['chai', 'jquery', 'text!style/menu.css'], function (chai, $, menuCss) {
    'use strict';
    var expect = chai.expect;

    describe('menu responsive', function () {
        var fixture;
        var iframe;
        var context;
        var items;

        beforeEach(function () {
            fixture = $('<div id="fixture"></div>').appendTo('body');
            iframe = $('<iframe></iframe>').appendTo(fixture); // Note: need to be in the DOM for styles to apply
            context = $(iframe.get(0).contentDocument);
            $('<style></style>').text(menuCss).appendTo(context.find('head'));
            var menu = $('<ul class="menu"><li>Item 1</li><li>Item 2</li></ul>').appendTo(context.find('body'));
            items = menu.find('li');
        });

        afterEach(function () {
            fixture.remove();
        });

        it('should turn horizontal when wide', function () {
            // when
            iframe.attr('width', '401px');

            // then
            expect(items.eq(0).offset().left).to.be.below(items.eq(1).offset().left);
            expect(items.eq(0).offset().top).to.equal(items.eq(1).offset().top);
        });

        it('should turn vertical when narrow', function () {
            // when
            iframe.attr('width', '400px');

            // then
            expect(items.eq(0).offset().top).to.be.below(items.eq(1).offset().top);
            expect(items.eq(0).offset().left).to.equal(items.eq(1).offset().left);
        });
    });
});