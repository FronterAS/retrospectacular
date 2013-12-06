'use strict';

angular.module('retrospectApp')

    .controller('EditpageCtrl', function ($scope, $location, $routeParams, tickets) {
        $scope.tickets = [];
        $scope.role;

        $scope.retroId = $routeParams.retroId;

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
            $scope.tickets.push({
                'role'   : $scope.role,
                'message': $scope.retroMessage,
                'retroId': $scope.retroId,
                'createdAt': JSON.parse($scope.createdAt)
            });

            // clear the message input box
            $scope.retroMessage = '';
        };



        $scope.retroPublish = function () {
            $scope.tickets.forEach(function (ticket) {
                tickets.save(ticket, function (response) {
                    console.log('did something');
                    console.log(response);
                });
            });

            $scope.tickets = [];
            $location.path('/retrospectives/' + $scope.retroId);
        };
    });
