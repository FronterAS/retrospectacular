var sage = require('sage'),
    q = require('q'),
    es = sage('http://localhost:9200');

exports.postData = function (data) {
    var typeName;

    return {
        ofType: function (_typeName) {
            typeName = _typeName;
            return this;
        },

        into: function (indexName) {
            var defer = q.defer(),
                esi = es.index(indexName),
                defer = q.defer(),
                est;

            if (!typeName) {
                defer.reject(new Error('You must specify a type'));
                return;
            }

            est = esi.type(typeName);

            est.post(data, function (err, result) {
                if (err) {
                    defer.reject(err);
                    return;
                }

                defer.resolve(result);
            });

            return defer.promise;
        }
    };
};

exports.checkIndexExists = function (indexName) {
    var esi = es.index(indexName),
        defer = q.defer();

    esi.exists(function (err, exists) {
        if (err) {
            defer.reject(err);
            return;
        }

        defer.resolve(exists);
    });

    return defer.promise;
};

exports.checkIndexStatus = function (indexName) {
    var esi = es.index(indexName),
        defer = q.defer();

    esi.status(function(err, result) {
        if (err) {
            defer.reject(err);
            return;
        }

        defer.resolve(result);
    });

    return defer.promise;
};

exports.getAll = function (types) {
    return {
        from: function (indexName) {
            var defer = q.defer(),
                esi = es.index(indexName),
                defer = q.defer(),
                est;

            if (!types) {
                defer.reject(new Error('Type(s) must be supplied'));
            }

            est = esi.type(types);

            est.find(function (err, result) {
                if (err) {
                    defer.reject(err);
                    return;
                }

                defer.resolve(result);
            });

            return defer.promise;
        }
    };
};

exports.destroyIndex = function (indexName) {
    var esi = es.index(indexName),
        defer = q.defer();

    esi.destroy(function (err, result) {
        if (err) {
            defer.reject(err);
            return;
        }

        defer.resolve(result);
    });

    return defer.promise;
};


// USAGE NOTES
/*

db.destroyIndex('retrospectives');

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
*/
