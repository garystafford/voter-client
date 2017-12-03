;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      'apiUrl': 'https://api.voter-demo.com',
      'election': '2016 Presidential Election'
    });
}(window.angular));
