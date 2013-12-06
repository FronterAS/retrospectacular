'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        '$timeout',
        'tickets',

        function ($scope, $routeParams, $timeout, tickets, BoardService) {
            var updateTickets;

            $scope.retroId = $routeParams.retroId;
            $scope.tickets = [];

            updateTickets = function () {
                console.log('Getting tickets');
                tickets.query({'retroId': $scope.retroId}, function (tickets) {
                    $scope.tickets = tickets;
                    $timeout(updateTickets, 2000);
                });
            };

            updateTickets();
        }
    ]
);
