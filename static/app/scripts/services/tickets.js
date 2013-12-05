'use strict';

angular.module('retrospectApp')
  .factory('tickets', ['$http', function ($http) {
    var tickets = {};

    tickets.getTickets = function (callback) {
        var url = 'http://petter.fronter.net:3000/retrospectives';

        return $http.get(url).success(function(data, status) {
                callback(data);
            }).error(function (data, status) {
                // Stuff gone bad!
                callback(data);
            });
    };

    // Public API here
    return tickets;
}]);
