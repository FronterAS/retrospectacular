var _ = require('lodash'),
    q = require('q'),
    db = require('../wrapper'),

    getRetrospectives = function () {
        var defer = q.defer();
        db.getAll('retrospective').from('retrospectives')
            .then(function (results) {
                console.log('getRetrospectives:', results);
                defer.resolve(results);
            })
            .fail(function (err) {
                console.log('getRetrospectives:', err);
                defer.reject(err);
            });
            return defer.promise;
    },
    putRetrospectives = function (results) {
        var promises = [];
        _.each(results, function(retrospective) {
            var defer = q.defer(),
                doc = fixDoc(retrospective);

            console.log('retrospective', retrospective, 'doc', doc);
            promises.push(defer.promise);

            db.put(doc).ofType('retrospective').withId(retrospective.id).into('retrospectives')
                .then(function(retrospective) {
                    console.log(retrospective);
                    defer.resolve(retrospective);
                })
                .fail(function(err) {
                    console.log(err);
                    defer.reject(err);
                });
        });
        if (promises.length = 1) {
            return promises[0];
        }
        return q.all(promises);
    },
    getTickets = function () {
        var defer = q.defer();
        db.getAll('ticket').from('retrospectives')
            .then(function (tickets) {
                console.log('tickets', tickets);
                defer.resolve(tickets);
            })
            .fail(function(err) {
                console.log(err);
                defer.reject(err);
            });
            return defer.promise;
    },
    putTickets = function(tickets) {
        var promises = [];
        _.each(tickets, function(ticket) {
            var defer = q.defer(),
                doc = fixDoc(ticket);

            promises.push(defer.promise);
            console.log('ticket', ticket, 'doc', doc);

            db.put(doc).ofType('ticket').withId(ticket.id).into('retrospectives')
                .then(function(result) {
                    console.log(result);
                    defer.resolve(result);
                })
                .fail(function(err) {
                    console.log(err);
                    defer.reject(err);
                });
        });
        if (promises.length = 1) {
            return promises[0];
        }
        return q.all(promises);
    },

    fixDoc = function(doc) {
        var result = {
            createdAt: (doc.createdat ? doc.createdat : doc.createdAt)
        };
        return result;
    },
    handleError = function (err) {
        if (err) {
            console.log(err);
        }
    };

db.checkIndexExists('retrospectives')
    .then(getRetrospectives)
    .then(putRetrospectives)
    .then(getTickets)
    .then(putTickets)
    .fail(handleError);
