var db = require('./wrapper'),

    explodeMessages = function (results) {
        var words = [];

        results.forEach(function (result) {
            words = words.concat(result.message.split(' '));
        });

        return words;
    };

exports.getTicketWords = function (req, res) {
    db.getAll('ticket').from('retrospectives')
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
    db.query('retroId:' + req.params.retroId).of('ticket').from('retrospectives')
        .then(function (result) {
            res.json(result);
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
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getRetrospective = function (req, res) {
    db.query('_id:' + req.params.retroId).of('retrospective').from('retrospectives')
        .then(function (result) {
            res.json(result[0]);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getRetrospectives = function (req, res) {
    db.getAll('retrospective').from('retrospectives')
        .then(function (result) {
            res.json({'results': result});
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.postRetrospective = function (req, res) {
    db.post(req.body).ofType('retrospective').into('retrospectives')
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.putRetrospective = function (req, res) {
    db.put(req.body).ofType('retrospective').withId(req.params.retroId).into('retrospectives')
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
