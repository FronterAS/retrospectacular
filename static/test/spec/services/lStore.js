'use strict';

describe('Service: lStore', function () {

  // load the service's module
  beforeEach(module('retrospectApp'));

  // instantiate service
  var service;
  beforeEach(inject(function (Lstore) {
    service = Lstore;
  }));

  it('Should be a instance', function () {
    expect(!!service).toBe(true);
  });

});
