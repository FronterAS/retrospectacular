var handlers = require('./handlers'),
    allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        next();
    };

exports.setup = function (api) {
    api.use(allowCrossDomain);

    api.get('/retrospectives', handlers.getRetrospectives);
    api.post('/retrospectives', handlers.postRetrospective);

    api.get('/retrospectives/:retroId/tickets', handlers.getTickets);
    api.get('/retrospectives/:retroId/tickets/:ticketId', handlers.getTicket);
    api.post('/retrospectives/:retroId', handlers.postTicketToRetrospective);
};
