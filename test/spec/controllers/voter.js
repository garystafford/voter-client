'use strict';

describe('Controller: VoterCtrl', function () {

  // load the controller's module
  beforeEach(module('voterClientApp'));

  var VoterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VoterCtrl = $controller('VoterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VoterCtrl.awesomeThings.length).toBe(3);
  });
});
