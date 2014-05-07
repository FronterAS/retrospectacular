try {
    require('newrelic');
} catch (e) {
    if ( e.code === 'MODULE_NOT_FOUND') {
        console.log('Run npm install without the --no-optional flag to install "newrelic"!');
    } else {
        console.log('Copy service/newrelic.js.example to service/newrelic.js');
    }
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

api.listen(config.app.port, config.app.host, function () {
    console.log('listening on : ', config.app.host, ':', config.app.port);
});
