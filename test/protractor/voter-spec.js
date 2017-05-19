'use strict';

describe('Voter Client SPA', function () {

  var request = require('request');
  var series = require('async/series');
  var requestJson = require('request-json');
  var apiGateway = 'http://localhost:8080/';
  var client = requestJson.createClient(apiGateway);
  var election = '2016 Presidential Election';
  var data = {};

  series([
    function(callback) {
      request(apiGateway + 'voter/candidates/drop', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'candidates/drop');
    },
    function(callback) {
      request(apiGateway + 'voter/votes/drop', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'votes/drop');
    },
    function(callback) {
      data = {
        firstName: 'Donald',
        lastName: 'Trump',
        politicalParty: 'Republican Party',
        election: election
      };

      client.post('candidate/candidates/', data, function(error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'Trump');
    },
    function(callback) {
      data = {
        firstName: 'Darrell',
        lastName: 'Castle',
        politicalParty: 'Constitution Party',
        election: election
      };

      client.post('candidate/candidates/', data, function(error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'Castle');
    },
    function(callback) {
      data = {
        firstName: 'Hillary',
        lastName: 'Clinton',
        politicalParty: 'Democratic Party',
        election: election
      };

      client.post('candidate/candidates/', data, function(error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'Clinton');
    },
    function(callback) {
      request(apiGateway + 'candidate/simulation', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'candidate/simulation');
    },
    function(callback) {
      request(apiGateway + 'voter/simulation/election/2016%20Presidential%20Election', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
      callback(null, 'voter/simulation/election');

    }
  ], function(err, results) {
    console.log(results);
  });

  beforeEach(function () {
    browser.get('http://localhost:9090/');
  });

  it('should display three candidate choices in drop-down', function () {
    var candidateSelect = element(by.id('candidateSelect')).all(by.tagName('option'));
    expect(candidateSelect.count()).toEqual(4);
    expect(candidateSelect.get(1).getText()).toEqual('Darrell Castle');
  });

  it('should display message when vote is placed', function () {
    element(by.cssContainingText('option', 'Darrell Castle')).click();
    element(by.buttonText('Submit')).click();
    expect(element(by.className('new-vote ng-binding')).getText()).toEqual('Vote for Darrell Castle!');
  });

  it('should increment vote count when vote is placed', function () {
    element(by.cssContainingText('option', 'Darrell Castle')).click();
    element(by.buttonText('Submit')).click();
    expect(element(by.id('total-votes')).getText()).toBeGreaterThan('0');
  });
});
