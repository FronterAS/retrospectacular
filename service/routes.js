var handlers = require('./handlers'),
    allowCrossDomain = function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    };

exports.setup = function (api) {
    api.use(allowCrossDomain);

    api.get('/retrospectives', handlers.getRetrospectives);
    api.post('/retrospectives', handlers.postRetrospective);

    api.get('/retrospectives/:retroId/tickets', handlers.getTickets);
};
