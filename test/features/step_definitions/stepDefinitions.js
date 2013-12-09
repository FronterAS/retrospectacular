var assert = require('assert');

var googleTest = function () {
    this.World = require("../support/world.js").World;

    this.givenNumber = 0;

    this.Given(/^I am on Google$/, function (next) {
        console.log('Going to google');
        this.driver.get('http://www.google.com')
            .then(function () {
                next();
            });
    });

    this.When(/^I search for WebDriverJS$/, function (next) {
        console.log('search for webdriverjs');
        this.driver.findElement(this.webdriver.By.name('q')).sendKeys('WebDriverJS');
        this.driver.findElement(this.webdriver.By.name('btnG')).click();
        next();
    });

    this.Then(/^I should get results$/, function (next) {
        var that = this;

        console.log('should get results');

        this.driver.wait(function () {
            return that.driver.getTitle().then(function (title) {
                assert.equal(title, 'WebDriverJS - Google Search');
                next();
            });
        }, 2000);
    });
};

module.exports = googleTest;
