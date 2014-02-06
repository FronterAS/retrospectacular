'use strict';

angular.module('retrospectApp')
    .controller('RetroCtrl', [
        '$scope',
        '$location',
        'retrospectives',

    function ($scope, $location, retrospectives) {
        $scope.retrospectives = [];
        $scope.newRetrospective = {};
        $scope.limit = 10000;
        $scope.page = 1;

        $scope.deleteRetrospective = function(retrospective) {
            var index = $scope.retrospectives.indexOf(retrospective);

            retrospectives.delete({'retroId': retrospective.id}, function () {
                console.log('deleted retrospective');
                $scope.retrospectives.splice(index, 1);
            });
        };

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
        retrospectives.get({'limit': $scope.limit, 'page': $scope.page},function (response) {
            $scope.retrospectives = response.results;
        });
    }
]);
