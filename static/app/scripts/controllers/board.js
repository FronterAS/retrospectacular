'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', ['$scope', '$routeParams', 'tickets', function ($scope, $routeParams, tickets) {
        var retroId = $routeParams.retroId;

        $scope.retrospectives = [];

        // this throws an error with cross domain
        tickets.query({retroId: retroId }, function (retrospectives) {
            $scope.retrospectives = retrospectives;
        });

        //$scope.retroId = $routeParams.retroId;
    }
]);
