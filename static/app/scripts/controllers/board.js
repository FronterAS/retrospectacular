'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'tickets',

        function ($scope, $routeParams, tickets) {
            $scope.retroId = $routeParams.retroId;
            $scope.tickets = [];

            tickets.query({'retroId': $scope.retroId}, function (tickets) {
                $scope.tickets = tickets;
            });
        }
    ]);
