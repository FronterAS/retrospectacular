'use strict';

// can't remember how to get the retrospective id into this view at the moment
angular.module('retrospectApp')
    .factory('tickets', [
        '$resource',
        'SERVICE_URL',

        function ($resource, SERVICE_URL) {
            return $resource(SERVICE_URL + '/retrospectives/:retroId/tickets/:ticketId', {
                'retroId': '@retroId',
                'page': '@page',
                'limit': '@limit'
            });
        }
    ]);
