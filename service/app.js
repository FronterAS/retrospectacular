var express = require('express'),
    app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.json('boom');
});

app.use(express.logger('dev'));

var allowCrossDomain = function (req, res, next) {
    if (!req.get('Origin')) {
        return next();
    }

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);

    if ('OPTIONS' == req.method) {
        return res.send(200);
    }

    next();
}

app.listen(3000);
