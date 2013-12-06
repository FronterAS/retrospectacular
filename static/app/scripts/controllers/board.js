'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        '$timeout',
        'tickets',

        function ($scope, $routeParams, $timeout, tickets, BoardService) {
            var updateTickets,
                promise;

            $scope.retroId = $routeParams.retroId;
            $scope.tickets = [];

            $scope.$on('$locationChangeStart', function(){
                $timeout.cancel(promise);
            });

            updateTickets = function () {
                console.log('Getting tickets');
                tickets.query({'retroId': $scope.retroId}, function (tickets) {
                    $scope.tickets = tickets;
                    promise = $timeout(updateTickets, 2000);
                });
            };

            updateTickets();
        }
    ]
);
