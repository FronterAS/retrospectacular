'use strict';

// can't remember how to get the retrospective id into this view at the moment
angular.module('retrospectApp')
    .factory('wordcloud', [
        '$resource',
        'SERVICE_URL',

        function ($resource, SERVICE_URL) {
            return $resource(SERVICE_URL + '/wordcloud');
        }
    ]);
