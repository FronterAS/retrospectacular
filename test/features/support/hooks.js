var hooks = function () {
    this.Before(function (callback) {
        // Just like inside step definitions, "this" is set to a World instance.
        // It's actually the same instance the current scenario step definitions
        // will receive.

        // Let's say we have a bunch of "maintenance" methods available on our World
        // instance, we can fire some to prepare the application for the next
        // scenario:

        console.log('before hook running');
        this.webdriver = require('selenium-webdriver');
        this.driver = new this.webdriver.Builder()
            .withCapabilities(this.webdriver.Capabilities.chrome())
            .build();

        // Don't forget to tell Cucumber when you're done:
        callback();
    });

    this.After(function (callback) {

        console.log('quitting driver');
        this.driver.quit();

        // Don't forget to tell Cucumber when you're done:
        callback();
    });
};

module.exports = hooks;

// tagging before hooks
/*
this.Before("@foo", "@bar,@baz", function(callback) {
    // This hook will be executed before scenarios tagged with @foo and either
    // @bar or @baz.

    // ...

    callback();
});
*/
