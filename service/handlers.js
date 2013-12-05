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
