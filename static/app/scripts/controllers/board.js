'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'retrospectives',
        'tickets',
        'createDialog',

        function ($scope, $routeParams, retrospectives, tickets, createDialog) {

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];
            $scope.page = 1;
            $scope.limit = 10000;

            $scope.deleteTicket = function (ticket) {
                createDialog({
                    template: '<p>Are you sure you want to delete this ticket?</p>',
                    id: 'deleteTicketDialog',
                    title: 'Delete ticket',
                    backdrop: true,
                    success: {
                        label: 'Make my day!',
                        fn: function () {
                            var index = $scope.tickets.indexOf(ticket);

                            tickets.delete({'ticketId': ticket.id, 'retroId': $scope.retroId}, function () {
                                console.log('got a response');
                                $scope.tickets.splice(index, 1);
                            });
                        }
                    }
                });
            };

            $scope.updateTickets = function () {
                console.log('Updating tickets.');
                tickets.get({'page': $scope.page, 'limit': $scope.limit, 'retroId': $scope.retroId}, function (tickets) {
                    console.log('Got tickets');
                    $scope.tickets = tickets.results;
                });
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
                $scope.retrospective = retrospective;
            });

            $scope.updateRetro = function () {
                retrospectives.update({'retroId': $scope.retroId}, {'name':$scope.retrospective.name}, function () {
                    console.log('Updating...');
                }, function (error) {
                    console.error('Error updating retrospective name', error);
                });
            };

            $scope.updateTickets();
        }
    ]
);
