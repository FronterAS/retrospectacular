'use strict';

angular.module('retrospectApp')
    .factory('tickets', [
        '$resource',
        function ($resource) {
            return $resource(
                'http://localhost\\:3000/retrospectives',
                {
                    query: {
                        method: 'GET',
                        params: {
                            id: 'brands'
                        },
                        isArray: true
                    }
                }
            );
        }
    ]);
