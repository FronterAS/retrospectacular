'use strict';

angular.module('retrospectApp')
  .controller('ChoosetypeCtrl', function ($scope, $location, retrospectives, tickets) {
    //$scope.lastRetrospective = {};
    var skrot;
    $scope.types = {};

    $scope.types.start = 'Positive';
    $scope.types.stop = 'Negative';
    $scope.types.cont = 'WTF?';

    // this throws an error with cross domain
    retrospectives.query(function (retrospectives) {
        $scope.retrospectives = retrospectives;

        $scope.lastRetrospective = retrospectives[retrospectives.length -1].id;

        skrot = retrospectives[retrospectives.length -1].id;

        tickets.data = [{'test': 'test',
                        'message': 'message'},
                        {'test': 'test',
                        'message': 'message'}];
        var params = {'retroId': skrot};

        tickets.save(params);
    });

    $scope.goToEdit = function (retroId,type) {
        var path = '/editpage/' + retroId + '/' + type;

        $location.url(path);
    };

});
