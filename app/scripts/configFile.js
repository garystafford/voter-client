;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      // 'apiPort': '8080',
      'apiUrl': 'http://api.voter-demo.com',
      'election': '2016 Presidential Election'
    });
}(window.angular));
