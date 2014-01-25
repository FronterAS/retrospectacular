'use strict';

angular.module('retrospectApp')
    .controller('RetroCtrl', [
        '$scope',
        '$location',
        'retrospectives',
    function ($scope, $location, retrospectives) {
        $scope.retrospectives = [];
        $scope.newRetrospective = {};

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

        var toLocaleStringSupportsLocales = function() {
            try {
                new Date().toLocaleString("i");
            } catch (e) {
                return e.name === "RangeError";
            }
            return false;
        };

        $scope.adaptResults = function(results) {
            results.forEach(function(result, index) {
                var tmpObj = new Date(result.createdAt);
                if (toLocaleStringSupportsLocales()) {
                    result.createdAt = tmpObj.toLocaleString("en-gb");
                    results[index] = result;
                }
            });
            return results;
        };

        // this throws an error with cross domain
        retrospectives.get(function (response) {
            $scope.retrospectives = $scope.adaptResults(response.results);
        });
    }
]);
