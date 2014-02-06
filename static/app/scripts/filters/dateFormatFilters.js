angular.module('retrospectApp')
    .filter('fromNow', function () {
        'use strict';
        return function (dateString) {
            return moment(dateString).fromNow();
        };
    });
