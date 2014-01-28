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
            };

            scope.hasDelete = function() {
                if (!attrs.onDelete) {
                    return false;
                } else {
                    return true;
                }
            };

            scope.hasUpdate = function() {
                if (!attrs.onUpdate) {
                    return false;
                } else {
                    return true;
                }
            };

            scope.saveChange = function () {
                scope.onUpdate();
                scope.toggleEditmode();
            };
        }
    };
    });
