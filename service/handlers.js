var db = require('./wrapper');

exports.getTickets = function (req, res) {
    db.query('retroId:' + req.params.retroId).of('ticket').from('retrospectives')
        .then(function (result) {
            console.log(result);
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
            console.log(result);
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getRetrospectives = function (req, res) {
    db.getAll('retrospective').from('retrospectives')
        .then(function (result) {
            console.log(result);
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.postRetrospective = function (req, res) {
    db.post(req.body).ofType('retrospective').into('retrospectives')
        .then(function (result) {
            console.log(result);
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
            console.log(result);
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};
