'use strict';

angular.module('retrospectApp')
    .factory('retrospectives', [
        '$resource',
        function ($resource) {
            return $resource('http://localhost\\:3000/retrospectives');
        }
    ]);
