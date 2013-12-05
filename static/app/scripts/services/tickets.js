'use strict';

// can't remember how to get the retrospective id into this view at the moment
angular.module('retrospectApp')
    .factory('tickets', [
        '$resource',
        function ($resource) {
            return $resource('http://localhost\\:3000/retrospectives/' + ticketId + '/tickets');
        }
    ]);
