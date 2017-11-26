;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .factory('VoterService', ['$q', '$http', 'EnvironmentConfig', function ($q, $http, EnvironmentConfig) {
      var apiBase = EnvironmentConfig.apiUrl + ':' + EnvironmentConfig.apiPort;

      return {
        getCandidates: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/voter/candidates/http/' + EnvironmentConfig.election);

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve(response);
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getResults: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/voter/results/' + EnvironmentConfig.election);

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve(response);
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getResultsVotes: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/voter/results/' + EnvironmentConfig.election + '/votes');

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve(response);
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getWinners: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/voter/winners/' + EnvironmentConfig.election);

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve(response);
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        getWinnersVotes: function () {
          var deferred = $q.defer();
          var httpPromise = $http.get(apiBase + '/voter/winners/' + EnvironmentConfig.election + '/votes');

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve(response);
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        },

        postVote: function (candidate) {
          var candidateChoice = '{ "candidate": "' + candidate.fullName + '", "election": "' + EnvironmentConfig.election + '" }';
          var deferred = $q.defer();
          var httpPromise = $http.post(apiBase + '/voter/votes', candidateChoice);

          httpPromise
            .then(function successCallback(response) {
              deferred.resolve({
                data: response
              });
            }, function errorCallback(error) {
              console.error('Error: ' + error);
            });

          return deferred.promise;
        }
      };
    }]);
}(window.angular));
