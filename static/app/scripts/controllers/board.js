'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'tickets',

        function ($scope, $routeParams, tickets) {
            var retroId = $routeParams.retroId,
                query = {
                    'retroId': retroId
                };

            $scope.tickets = [];

            tickets.query(query, function (tickets) {
                $scope.tickets = tickets;
            });

            $scope.retroId = retroId;
        }
    ]);
