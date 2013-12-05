var db = require('./wrapper');

/*db.destroyIndex('retrospectives');*/
db.checkIndexExists('retrospectives')
    .then(function (exists) {
        console.log('check index exists', exists);
    })
    .fail(function (err) {
        console.log(err);
    });

db.checkIndexStatus('retrospectives')
    .then(function (status) {
        console.log('check index status ', status);
    })
    .fail(function (err) {
        console.log(err);
    });

var teamData = {
    name: 'Bogus team'
};

db.postData(teamData).ofType('team').into('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

var retroData = {
    'teamId': 102,
    'type': 'pro',
    'message': 'Learning new things'
};

db.postData(retroData).ofType('ticket').into('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

db.getAll('ticket').from('retrospectives')
    .then(function (result) {
        console.log(result);
    })
    .fail(function (err) {
        console.log(err);
    });

exports.getResults = function (req, res) {
    res.json('boom');
};
