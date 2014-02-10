angular.module('retrospectApp')
    .filter('someTimeAgo', function () {
        'use strict';
        return function (dateString) {
            return moment(dateString).fromNow();
        };
    });
