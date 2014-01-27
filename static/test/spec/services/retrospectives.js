'use strict';

describe('Service: retrospectives', function () {

  // load the service's module
  beforeEach(module('retrospectApp'));

  // instantiate service
  var retrospectives;
  beforeEach(inject(function (_retrospectives_) {
    retrospectives = _retrospectives_;
  }));

  it('Retrospectives should exist', function () {
    expect(!!retrospectives).toBe(true);
  });

});
