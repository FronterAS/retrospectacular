'use strict';

angular.module('retrospectApp')

  .controller('EditpageCtrl', function ($scope, $routeParams, tickets) {
    $scope.retroListElements = [];

    $scope.noteType = $routeParams.noteType;

    $scope.retroId = $routeParams.retroId;

    $scope.addTicket = function() {
        $scope.retroListElements.push ({
            'role': $scope.noteType,
            'message': $scope.retroMessage
        });
        $scope.retroMessage = '';
    };



    $scope.retroPublish = function () {
        var params = {'retroId': $scope.retroId};
        tickets.data = $scope.retroListElements;
        tickets.save(params);
    };
});
