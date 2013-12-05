'use strict';

describe('Controller: EditpageCtrl', function () {

  // load the controller's module
  beforeEach(module('retrospectApp'));

  var EditpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditpageCtrl = $controller('EditpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
