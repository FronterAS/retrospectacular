var handlers = require('./handlers'),
    allowCrossDomain = function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        // res.set('Access-Control-Allow-Max-Age', 3600);

        next();
    };

exports.setup = function (api) {
    api.get('/', allowCrossDomain);

    api.get('/retrospectives', handlers.getRetrospectives);
    api.post('/retrospectives', handlers.postRetrospective);

    api.get('/retrospectives/:retroId/tickets', handlers.getTickets);
};
