var _ = require('lodash'),
    config = require('../config').Config,
    db = require('../wrapper');

exports.getRetrospective = function (req, res) {
    db.query('_id:' + req.params.retroId).of('retrospective').from(config.db.index)
        .then(function (result) {
            res.json(result[0]);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.getRetrospectives = function (req, res) {
    var start = 0,
        limit = 10,
        page = 1;

    if (req.query.page) {
        page = req.query.page;
    }

    if (req.query.limit) {
        limit = req.query.limit;
    }

    // page is a human readable iterator
    // start is for the machines
    start = (page - 1) * limit;

    db.getAll('retrospective').sortBy('createdAt:desc').start(start).size(limit).from(config.db.index)
        .then(function (result) {
            res.json({'results': result, 'total': result.total});
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.postRetrospective = function (req, res) {
    db.post(req.body).ofType('retrospective').into(config.db.index)
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.putRetrospective = function (req, res) {
    db.put(req.body).ofType('retrospective').withId(req.params.retroId).into(config.db.index)
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};

exports.deleteRetrospective = function (req, res) {
    db.delete('retrospective').withId(req.params.retroId).from(config.db.index)
        .then(function (result) {
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};
