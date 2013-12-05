'use strict';

angular.module('retrospectApp')
  .controller('EditpageCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.noteType = $routeParams.noteType;
  });
