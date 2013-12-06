'use strict';

angular.module('retrospectApp')
    .controller('RetroCtrl', [
        '$scope',
        '$location',
        'retrospectives',
    function ($scope, $location, retrospectives) {
        $scope.retrospectives = [];
        $scope.newRetrospective = {};

        $scope.saveRetrospective = function () {
            var retrospective;

            if ($scope.retroAddForm.$valid) {
                retrospective = angular.copy($scope.newRetrospective);

                // Sending plan data to the service
                retrospectives.save($scope.newRetrospective, function (savedRetrospective) {
                    $scope.retrospectives.push(savedRetrospective);
                    $location.path('/retrospectives/' + savedRetrospective.id);

                }, function (error) {
                    console.error('Error saving retrospective', error);
                });

            } else {
                console.warn('Errors in form data');
            }
        };

        // this throws an error with cross domain
        retrospectives.get(function (response) {
            $scope.retrospectives = response.results;
        });

        buildCloud();
    }
]);
