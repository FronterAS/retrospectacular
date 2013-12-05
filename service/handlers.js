var sage = require('sage');
var q = require('q');
var es = sage("http://localhost:9200");
var esi = es.index('retrospectives');

var db = require('./wrapper');

esi.exists(function (err, exists) {
    var defer = q.defer();

    if (err) {
        console.log(err);
        defer.reject(err);
        return;
    }

    console.log(exists);
    defer.resolve(exists);
});

esi.all({
    'docs': [
        {_type: 'ticket', _id: 0}
    ]
}, function (err, exists) {
    var defer = q.defer();

    if (err) {
        console.log(err);
        defer.reject(err);
        return;
    }

    console.log(exists);
    defer.resolve(exists);
});


exports.getResults = function (req, res) {
    res.json('boom');
};
