try {
    require('newrelic');
} catch (e) {
    console.log('Optional module "newrelic" was not installed');
}

var routes = require('./routes'),
    logs = require('./logs'),
    express = require('express'),
    api = express(),
    config = require('../config').Config;

api.use(express.methodOverride());
api.use(express.json());

logs.setupLogger(api);

routes.setup(api);

logs.setupErrorLogger(api);

api.listen(config.app.port, config.app.host);
