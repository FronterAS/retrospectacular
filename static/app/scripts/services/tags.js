'use strict';

// can't remember how to get the retrospective id into this view at the moment
angular.module('retrospectApp')
    .factory('tags', [
        '$resource',
        'SERVICE_URL',

        function ($resource, SERVICE_URL) {
            return $resource(SERVICE_URL + '/tags');
        }
    ]);
