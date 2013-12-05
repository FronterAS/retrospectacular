'use strict';

describe('Service: tickets', function () {

  // load the service's module
  beforeEach(module('retrospectApp'));

  // instantiate service
  var tickets;
  beforeEach(inject(function (_tickets_) {
    tickets = _tickets_;
  }));

  it('should do something', function () {
    expect(!!tickets).toBe(true);
  });

});
