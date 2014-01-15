var _ = require('lodash'),
    db = require('../wrapper'),

    explodeMessages = function (results) {
        var words = [];
        _.each(results, function (result) {
            words = words.concat(result.message.split(' '));
        });
        return words;
    };

exports.getTicketWords = function (req, res) {
    db.getAll('ticket').sortBy('createdAt:desc').from('retrospectives')
        .then(function (result) {
            var words = explodeMessages(result);
            res.json({'results': words});
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getTickets = function (req, res) {
    var start = 0;
    if (!_.isUndefined(req.params.start)) {
        start = req.params.start;
    }
    db.query('retroId:' + req.params.retroId).start(start).sortBy('createdAt:desc').of('ticket').from('retrospectives')
        .then(function (result) {
            res.json({'results': result, 'total': result.total});
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getTicket = function (req, res) {
    db.query('_id:' + req.params.ticketId).of('ticket').from('retrospectives')
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.deleteTicket = function (req, res) {
    db.delete('ticket').withId(req.params.ticketId).from('retrospectives')
        .then(function (result) {
            res.send(204);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.putTicket = function (req, res) {
    req.body.retroId = req.params.retroId;
    db.put(req.body).ofType('ticket').withId(req.params.ticketId).into('retrospectives')
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.postTicketToRetrospective = function (req, res) {
    // @TODO: perhaps move retroId into req.body
    //  from the frontend?
    req.body.retroId = req.params.retroId;
    db.post(req.body).ofType('ticket').into('retrospectives')
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};
