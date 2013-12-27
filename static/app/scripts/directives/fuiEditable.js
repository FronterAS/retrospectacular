'use strict';

angular.module('retrospectApp')
    .directive('fuiEditable', function () {
    return {
        templateUrl: 'views/directives/fuiEditable.html',
        restrict: 'EA',
        replace: true,
        scope: {
            item: '=',
            onDelete: '&',
            onUpdate: '&'
            },
        transclude: true,
        link: function postLink(scope, element, attrs) {
            scope.toggleEditmode = function() {
                scope.showEdit = !scope.showEdit;
            }

            scope.saveChange = function () {
                scope.onUpdate();
                scope.toggleEditmode();
            }
        }
    };
    });
