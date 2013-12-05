'use strict';

angular.module('retrospectApp')
  .controller('ChoosetypeCtrl', function ($scope, $location) {
    $scope.types = {};

    $scope.types.start = 'Start';
    $scope.types.stop = 'Stop';
    $scope.types.cont = 'Continue';

    $scope.addStart = function () {
        $location.url('/editpage');
      };

    $scope.addStop = function () {
        $location.url('/editpage');
      };

    $scope.addContinue = function () {
        $location.url('/editpage');
      };

    $scope.goToEdit = function (type) {
        var path = '/editpage/' + type;

        $location.url(path);
      };
  });
