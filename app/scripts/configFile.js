;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      // 'description': 'settings for running app locally'
      // 'apiPort': '8080',
      // 'apiUrl': 'http://localhost',
      'description': 'settings for running app within a Docker container, in Production'
      'apiPort': '8090',
      'apiUrl': 'http://api.voter-demo.com'
    });
}(window.angular));
