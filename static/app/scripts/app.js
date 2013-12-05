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
      .when('/editpage/:noteType', {
        templateUrl: 'views/editpage.html',
        controller: 'EditpageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
