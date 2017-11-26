;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      'description': 'settings for running app locally',
      'apiPort': '8090',
      'apiUrl': 'http://localhost',
      // 'description': 'settings for running app within a Docker container, in Production',
      // 'apiPort': '8090',
      // 'apiUrl': 'http://api.voter-demo.com',
      'election': '2016 Presidential Election'
    });
}(window.angular));
