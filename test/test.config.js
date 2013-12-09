// https://github.com/angular/protractor/blob/master/docs/browser-setup.md
exports.config = {
    seleniumServerJar: 'selenium/libs/selenium-server-standalone-2.35.0.jar',
    capabilities: {
        // npm install --save-dev phantomjs
        'browserName': 'chrome', // firefox, phantomjs
        'chromeDriver': '/home/gavin/repositories/retrospective/test/selenium/drivers/linux/64bits/chromedriver',
        /*'chromeOptions': {
            'binary': '/home/gavin/repositories/retrospective/test/selenium/drivers/linux/64bits/chromedriver',
            'extensions': [],
            'args': ['show-fps-counter=true']
        }*/
    },
    specs: ['tests/**/*.js']
};

/*
capabilities: {
  'browserName': 'phantomjs',

  // should be able to omit this property if phantomjs installed globally
  'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs'
}*/
