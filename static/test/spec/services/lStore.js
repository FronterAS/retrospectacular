'use strict';

describe('Service: lStore', function () {

  // load the service's module
  beforeEach(module('retrospectApp'));

  // instantiate service
  var service;
  beforeEach(inject(function (Lstore) {
    service = Lstore;
  }));

  it('should do something', function () {
    expect(!!service).toBe(true);
  });

});
