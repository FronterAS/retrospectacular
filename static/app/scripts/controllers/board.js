'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'retrospectives',
        'tickets',
        'tags',

        function ($scope, $routeParams, retrospectives, tickets, tags) {
            var updateTickets;

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];

            $scope.tags = [];
            $scope.selectedTags = [];

            $scope.tagsData = {
                local: []
            };

            $scope.choosingTag = false;

            $scope.deleteTicket = function (ticket) {
                var index = $scope.tickets.indexOf(ticket);

                tickets.delete({'ticketId': ticket.id, 'retroId': $scope.retroId}, function () {
                    console.log('got a response');
                });

                $scope.tickets.splice(index, 1);
            };

            $scope.updateTickets = function () {
                console.log('Updating tickets.');
                tickets.query({'retroId': $scope.retroId}, function (tickets) {
                    console.log('Got tickets');
                    $scope.tickets = tickets;
                });
            };

            $scope.selectTag = function (selectTag) {
                $scope.selectedTags.push(selectTag);
            };

            $scope.deselectTag = function (selectTag) {
                $scope.selectedTags.push(selectTag);
            };

            $scope.chooseTags = function (ticket) {
                tags.get(function (tags) {
                    $scope.tags = tags.results.map(function (tag) {
                        return tag.name;
                    });

                    $scope.tagsData = {
                        local: $scope.tags
                    };

                    $scope.choosingTag = true;
                });
            };

            $scope.closeTagChooser = function () {
                $scope.choosingTag = false;
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
            });

            $scope.updateTickets();
        }
    ]
);
