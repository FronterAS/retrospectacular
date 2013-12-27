'use strict';

describe('Service: lStore', function () {

  // load the service's module
  beforeEach(module('retrospectApp'));

  // instantiate service
  var lStore;
  beforeEach(inject(function (_lStore_) {
    lStore = _lStore_;
  }));

  it('should do something', function () {
    expect(!!lStore).toBe(true);
  });

});
