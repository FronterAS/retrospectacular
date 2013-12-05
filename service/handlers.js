var db = require('./wrapper');

db.checkIndexExists('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });


exports.getResults = function (req, res) {
    res.json('boom');
};
