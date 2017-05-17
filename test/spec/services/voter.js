'use strict';

describe('Service: voter', function () {

  // load the service's module
  beforeEach(module('voterClientApp'));

  // instantiate service
  var voter;
  beforeEach(inject(function (_voter_) {
    voter = _voter_;
  }));

  it('should do something', function () {
    expect(!!voter).toBe(true);
  });

});
