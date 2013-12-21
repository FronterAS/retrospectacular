'use strict';

angular.module('retrospectApp')
    .directive('fuiEditable', function () {
    return {
        templateUrl: 'views/directives/fuiEditable.html',
        restrict: 'EA',
        replace: true,
        scope: {
            item: '=',
            deleteIt: '&'
            },
        transclude: true,
        link: function postLink(scope, element, attrs) {
            scope.toggleEditmode = function() {
                scope.showEdit = !scope.showEdit;
            }
        }
    };
    });
