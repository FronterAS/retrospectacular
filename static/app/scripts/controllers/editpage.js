'use strict';

angular.module('retrospectApp')

  .controller('EditpageCtrl', function ($scope, $routeParams, tickets) {
    $scope.retroListElements = [];

    $scope.noteType = $routeParams.noteType;

    $scope.addTicket = function() {
        $scope.retroListElements.push ({
            'role': $scope.noteType,
            'message': $scope.retroMessage
        });
        $scope.retroMessage = '';
    };

    $scope.retroPublish = function () {
        // here call the tickets.save()
    };

  });
