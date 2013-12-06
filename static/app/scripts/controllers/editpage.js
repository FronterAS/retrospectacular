'use strict';

angular.module('retrospectApp')

    .controller('EditpageCtrl', function ($scope, $routeParams, tickets) {
        $scope.retroTickets = [];
        $scope.role = 'pro';

        $scope.retroId = $routeParams.retroId;

        $scope.setRole = function (role) {
            $scope.role = role;
        };

        $scope.addTicket = function() {
            $scope.retroTickets.push({
                'role'   : $scope.role,
                'message': $scope.retroMessage,
                'retroId': $scope.retroId
            });

            // clear the message input box
            $scope.retroMessage = '';
        };



        $scope.retroPublish = function () {
            tickets.save($scope.retroTickets, function (response) {
                console.log('did something');
                console.log(response);
            });
        };
});
