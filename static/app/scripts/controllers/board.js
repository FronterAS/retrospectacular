'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', [
        '$scope',
        '$routeParams',
        'retrospectives',
        'tickets',
        'tags',

        function ($scope, $routeParams, retrospectives, tickets, tags) {
            var updateTickets,

                updateTags = function () {
                    tags.get(function (tags) {
                        $scope.tags = tags.results.map(function (tag) {
                            return tag.name;
                        });

                        $scope.tagsData = {
                            local: $scope.tags
                        };
                    });
                };

            $scope.retroId = $routeParams.retroId;
            $scope.retroName = '';
            $scope.tickets = [];

            $scope.tags = [];
            $scope.selectedTags = [];
            $scope.selectedTicket = null;

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

            /**
             * Won't select the tag if it already exists in the tags array.
             *
             * @return {void}
             */
            $scope.selectTag = function () {
                if (!~$scope.selectedTags.indexOf($scope.tagSelect)) {
                    // @TODO: This is a quick fix. When you click the autocomplete selection
                    // you get a object not a string.
                    if ($scope.tagSelect.value) {
                        $scope.tagSelect = $scope.tagSelect.value;
                    }
                    $scope.selectedTags.push($scope.tagSelect);
                    $scope.tagSelect = '';
                }
            };

            /**
             * Won't try to remove a tag.
             *
             * @param  {string} deselectThisTag The tag name.
             * @return {void}
             */
            $scope.deselectTag = function (deselectThisTag) {
                var index = $scope.selectedTags.indexOf(deselectThisTag);

                if (~index) {
                    $scope.selectedTags.splice(index, 1);
                }
            };

            $scope.updateTicketTags = function (tags) {
                var defer = $q.defer();

                tickets.save($scope.selectedTags, function (response) {
                    defer.resolve(response);
                });

                return defer.promise;
            };

            $scope.chooseTags = function (ticket) {
                $scope.choosingTag = true;
                $scope.selectedTicket = ticket;

                // We now reference the ticket tags, IT IS A REFERENCE!!!! that's why it updates
                // as if by magic silly fucker!
                $scope.selectedTags = ticket.tags;
            };

            $scope.closeTagChooser = function () {
                updateTicketTags($scope.selectedTags)
                    .then(function (response) {
                        $scope.choosingTag = false;
                        $scope.selectedTicket = null;
                    });
            };

            retrospectives.get({'retroId': $scope.retroId}, function (retrospective) {
                $scope.retroName = retrospective.name;
            });

            $scope.updateTickets();
        }
    ]
);
