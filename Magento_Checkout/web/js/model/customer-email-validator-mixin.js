define([], function () {
    'use strict';

    return function (target) {
        // Override the validate method to always return true
        target.validate = function () {
            return true;
        };

        return target;
    };
});