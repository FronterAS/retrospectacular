'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'retrospectives',
        'tickets',

        function ($scope, $routeParams, retrospectives, tickets, BoardService) {
            var updateTickets;

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];

            $scope.deleteTicket = function (ticket) {
                var index = $scope.tickets.indexOf(ticket);

                tickets.delete({'ticketId': ticket.id, 'retroId': $scope.retroId}, function () {
                    console.log('got a response');
                });

                $scope.tickets.splice(index, 1);
            };

            var toLocaleStringSupportsLocales = function() {
                try {
                    new Date().toLocaleString("i");
                } catch (e) {
                    return e.name === "RangeError";
                }
                return false;
            };

            $scope.adaptResults = function(results) {
                results.forEach(function(result, index) {
                    var tmpObj = new Date(result.createdAt);
                    if (toLocaleStringSupportsLocales()) {
                        result.createdAt = tmpObj.toLocaleString("en-gb");
                        results[index] = result;
                    }
                });
                return results;
            };

            $scope.updateTickets = function () {
                console.log('Updating tickets.');
                tickets.get({'retroId': $scope.retroId}, function (tickets) {
                    console.log('Got tickets');
                    $scope.tickets = $scope.adaptResults(tickets.results);
                });
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
            });

            $scope.updateTickets();
        }
    ]
);
