'use strict';

angular.module('retrospectApp', ['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/retrospectives.html',
                controller: 'RetroCtrl'
            })
            .when('/retrospectives/:retroId', {
                templateUrl: 'views/board.html',
                controller: 'BoardCtrl'
            })
            .when('/editpage/:retroId', {
                templateUrl: 'views/editpage.html',
                controller: 'EditpageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
