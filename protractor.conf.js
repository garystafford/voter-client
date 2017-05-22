exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./test/protractor/*.js'],
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  }
};
