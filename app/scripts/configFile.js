;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant("EnvironmentConfig", {
      "description": "Call the Voter Service directly in a local development environment",
      "apiUrl": "http://localhost",
      "apiPort": "8080"
    });
}(window.angular));
