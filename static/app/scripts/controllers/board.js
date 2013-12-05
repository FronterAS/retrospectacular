'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', ['$scope', 'tickets', function ($scope, tickets) {
        $scope.retrospectives = [];

        // this throws an error with cross domain
        tickets.query(function (retrospectives) {
            $scope.retrospectives = retrospectives;
        });
    }
]);
