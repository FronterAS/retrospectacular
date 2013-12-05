var sage = require('sage');
var q = require('q');
var es = sage('http://localhost:9200');

exports.postToType = function (type, data) {
    var est = esi.type('ticket'),
        defer = q.defer();

    est.post(data, function (err, result) {
        if (err) {
            console.log(err);
            defer.reject(err);
            return;
        }

        defer.resolve(result);
        console.log(result);
    });
};

exports.checkIndexExists = function (indexName) {
    var esi = es.index(indexName);

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
};
