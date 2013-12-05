'use strict';

angular.module('retrospectApp')
  .controller('ChoosetypeCtrl', function ($scope, $location, tickets) {
    $scope.types = {};

    $scope.types.start = 'Positive';
    $scope.types.stop = 'Negative';
    $scope.types.cont = 'WTF?';

    var ticketCallback = function (data) {
        $scope.data = data;
      };

    tickets.getTickets(ticketCallback);

    $scope.goToEdit = function (type) {
        var path = '/editpage/' + type;

        $location.url(path);
      };
  });
