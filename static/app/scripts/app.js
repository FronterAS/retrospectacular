'use strict';

angular.module('retrospectApp', ['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/retrospectives/:retroId', {
                templateUrl: 'views/board.html',
                controller: 'BoardCtrl'
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
