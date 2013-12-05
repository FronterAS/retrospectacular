'use strict';

angular.module('retrospectApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/choosetype', {
        templateUrl: 'views/choosetype.html',
        controller: 'ChoosetypeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
