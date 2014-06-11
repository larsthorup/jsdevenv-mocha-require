/*global define*/
define([], function () {
    'use strict';

    var time = {};
    time.durationInEnglish = function (duration) {
        var seconds = duration / 1000;
        return seconds + ' seconds ago';
    };
    return time;
});