'use strict';

describe('Controller: ChoosetypeCtrl', function () {

  // load the controller's module
  beforeEach(module('retrospectApp'));

  var ChoosetypeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChoosetypeCtrl = $controller('ChoosetypeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
