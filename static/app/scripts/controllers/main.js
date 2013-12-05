'use strict';

angular.module('retrospectApp')
    .controller('MainCtrl', ['$scope', 'tickets', function ($scope, tickets) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // this throws an error with cross domain
        tickets.get(function () {
            console.log('got');
        });
    }
]);
