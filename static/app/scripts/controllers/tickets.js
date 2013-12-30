'use strict';

angular.module('retrospectApp')

    .controller('TicketCtrl', [
        '$q',
        '$scope',
        '$location',
        '$routeParams',
        '$timeout',
        'tickets',
        'Lstore',

        function ($q, $scope, $location, $routeParams, $timeout, tickets, Lstore) {
            var storedTickets;

            $scope.role;

            $scope.retroId = $routeParams.retroId;

            storedTickets = Lstore.get($scope.retroId);

            $scope.tickets = storedTickets ? storedTickets : [];

            $scope.deleteTicket = function (ticket) {
                var index = $scope.tickets.indexOf(ticket);
                $scope.tickets.splice(index, 1);
                Lstore.set($scope.retroId, $scope.tickets);
            };

            $scope.setRole = function (role) {
                switch (role) {
                    case 'pro':
                        $scope.placeholder = 'What went well?';
                        break;
                    case 'con':
                        $scope.placeholder = 'What did not go well?';
                        break;
                    case 'puzzle':
                        $scope.placeholder = 'What was confusing?';
                        break;
                }

                $scope.role = role;
            };

            $scope.setRole('pro');

            $scope.createdAt = JSON.stringify(new Date());

            $scope.addTicket = function () {
                var params = {
                    'role'   : $scope.role,
                    'message': $scope.retroMessage,
                    'retroId': $scope.retroId,
                    'createdAt': JSON.parse($scope.createdAt)
                };

                $scope.tickets.push(params);

                // clear the message input box
                $scope.retroMessage = '';

                Lstore.set($scope.retroId, $scope.tickets);
            };

            $scope.saveChanges = function () {
                Lstore.set($scope.retroId, $scope.tickets);
            }

            $scope.retroPublish = function () {
                var promises = [];

                $scope.tickets.forEach(function (ticket) {
                    var defer = $q.defer();
                    promises.push(defer.promise);

                    console.log('Saving a ticket.');
                    tickets.save(ticket, function (response) {
                        defer.resolve(response);
                    });
                });

                // When all the tickets are saved, change location
                $q.all(promises).then(function (responses) {
                    console.log('All tickets saved');

                    // This is to slow down the navigation back to the board.
                    // It's just too fast for it's own good
                    $timeout(function () {
                        $location.path('/retrospectives/' + $scope.retroId);
                    }, 1000);

                    $scope.tickets = [];
                    Lstore.remove($scope.retroId, $scope.tickets);
                });
            };
        }
    ]);
