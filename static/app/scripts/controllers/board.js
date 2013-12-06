'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        '$timeout',
        'retrospectives',
        'tickets',

        function ($scope, $routeParams, $timeout, retrospectives, tickets, BoardService) {
            var updateTickets,
                promise;

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];

            $scope.$on('$locationChangeStart', function () {
                $timeout.cancel(promise);
            });

            updateTickets = function () {
                tickets.query({'retroId': $scope.retroId}, function (tickets) {
                    $scope.tickets = tickets;
                    promise = $timeout(updateTickets, 2000);
                });
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
            });

            updateTickets();
        }
    ]
);
