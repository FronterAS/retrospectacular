'use strict';

angular.module('retrospectApp')
    .controller('BoardCtrl', ['$scope', '$routeParams', 'tickets', function ($scope, $routeParams, tickets) {
        var retroId = $routeParams.retroId,
//            ticketId = $routeParams.ticketId,
            query = {
                retroId: retroId
            };
/*
        if (ticketId) {
            query.ticketId = ticketId;
        }
*/
        $scope.retrospectives = [];

        tickets.query(query, function (retrospectives) {
            $scope.retrospectives = retrospectives;
        });

        //$scope.retroId = $routeParams.retroId;
    }
]);
