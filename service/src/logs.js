'use strict';

var winston = require('winston'),
    expressWinston = require('express-winston'),

    config = require('../config').Config,

    logTransport = new winston.transports.Console({
        json: true,
        colorize: true
    });

if (config.log.transport==='DailyRotateFile') {
    logTransport = new winston.transports.DailyRotateFile({
        colorize: true,
        filename: config.log.dir + 'dailyRotateFile.log',
        datePattern: '.yyyy-MM-dd',
        maxsize: 20000
    });
}

exports.setupErrorLogger = function (api) {
    api.use(expressWinston.errorLogger({
        transports: [
            logTransport
        ],
        meta: true
    }));
};

exports.setupLogger = function (api) {
    api.use(expressWinston.logger({
        transports: [
            logTransport
        ],
        meta: true
    }));
};
