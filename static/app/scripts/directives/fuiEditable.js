
'use strict';

angular.module('retrospectApp')
    .controller('Ctrl', [
        'retrospectives'
    ])
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
    })
    .directive('fuiRetroname', function (retrospectives) {
        return {
            templateUrl: 'views/directives/fuiRetroname.html',
            restrict: 'EA',
            replace: true,
            scope: {
                item: '=',
                onUpdate: '&'
            },
            transclude: true,
            link: function postLink(scope, element, attrs) {
                scope.toggleEditmode = function() {
                    scope.showEdit = !scope.showEdit;
                };

                scope.updateRetro = function () {
                    retrospectives.update({'retroId': scope.item.id}, {'name':scope.item.name}, function () {
                        console.log('Updating...');
                    }, function (error) {
                        console.error('Error updating retrospective name', error);
                    });
                    console.log('Updating.......');
                    scope.toggleEditmode();
                };
            }
        };
    });
