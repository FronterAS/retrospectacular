'use strict';

angular.module('retrospectApp').controller('RetroCtrl', [
    '$scope',
    '$location',
    'retrospectives',
    'createDialog',

    function ($scope, $location, retrospectives, createDialog) {
        $scope.retrospectives = [];
        $scope.newRetrospective = {};
        $scope.limit = 10000;
        $scope.page = 1;

        $scope.deleteRetrospective = function(retrospective) {
            createDialog({
                template: '<p>Are you sure you want to delete this ticket?</p>',
                id: 'deleteRetrospectiveDialog',
                title: 'Delete retrospective',
                backdrop: true,
                success: {
                    label: 'Make my day!',
                    fn: function () {
                        var index = $scope.retrospectives.indexOf(retrospective);

                        retrospectives.delete({'retroId': retrospective.id}, function () {
                            console.log('deleted retrospective');
                            $scope.retrospectives.splice(index, 1);
                        });
                    }
                }
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
