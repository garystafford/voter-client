;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      'description': 'Call the Voter Service directly in a local development environment',
      // 'apiUrl': 'http://api.voter-demo.com',
      'apiUrl': 'http://gateway',
      'apiPort': '8080'
    });
}(window.angular));
