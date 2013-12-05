var db = require('./wrapper');

exports.getResults = function (req, res) {

    db.getAll('ticket').from('retrospectives')
        .then(function (result) {
            console.log(result);
            res.json(result);
        })
        .fail(function (err) {
            console.log(err);
            res.json(err);
        });
};
