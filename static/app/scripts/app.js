'use strict';

angular.module('retrospectApp', ['ngResource', 'retrospectApp.config'])
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
            .when('/retrospectives/:retroId/markup', {
                templateUrl: 'views/wikiboard.html',
                controller: 'BoardCtrl'
            })
            .when('/wordcloud', {
                templateUrl: 'views/wordcloud.html',
                controller: 'WordCloudCtrl'
            })
            .when('/tickets/:retroId', {
                templateUrl: 'views/tickets.html',
                controller: 'TicketCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    });
