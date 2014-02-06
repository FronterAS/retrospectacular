angular.module('retrospectApp')
    .filter('fromNow', function () {
        return function (dateString) {
            return moment(dateString).fromNow()
        };
    });
