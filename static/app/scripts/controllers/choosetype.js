'use strict';

angular.module('retrospectApp')
  .controller('ChoosetypeCtrl', function ($scope) {
    $scope.types = {};

    $scope.types.start = 'Start';
    $scope.types.stop = 'Stop';
    $scope.types.cont = 'Continue';
    /*
    $scope.types = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    */
  });
