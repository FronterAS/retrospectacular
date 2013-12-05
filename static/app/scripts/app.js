'use strict';

angular.module('retrospectApp', ['ngResource'])
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

    }).config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
