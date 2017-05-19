'use strict';

xdescribe('voterClientApp', function() {
  var _scope;
  var CONTROLLER_NAME = 'VoterController';

  beforeEach(module('voterClientApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('init', function() {
    it('should create the controller correctly', inject(function($controller) {
      $controller(CONTROLLER_NAME, {$scope: _scope});
    }));
  });

  describe('onLoad', function() {
    it('should load correctly', inject(function($controller) {
      // ...
    }));
  });
});
