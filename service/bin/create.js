var db = require('../wrapper'),
    config = require('../config').Config,
    q = require('q'),

    tickets = [{
        'role': 'pro',
        'message': 'We learned loads',
        'createdAt' : (new Date()).toISOString()
    },{
        'role': 'con',
        'message': 'Then we forgot most of it',
        'createdAt': (new Date()).toISOString()
    },{
        'role': 'puzzle',
        'message': "We still can't quite understand what happened",
        'createdAt': (new Date()).toISOString()
    }],

    handleError = function (err) {
        console.log(err);
    },

    handleDbExists = function (exists) {
        if (exists) {
            console.log('db exists, deleting it');
            return db.destroyIndex(config.db.index);
        }
    },

    createDb = function () {
        console.log('creating new db');
        return db.createIndex(config.db.index);
    },

    postRetrospective = function () {
        var defer = q.defer();

        console.log('posting retrospective');

        db.post({'name': 'Sprint 1'}).ofType('retrospective').into(config.db.index)
            .then(function (result) {
                console.log(result);
                defer.resolve(result);
            })
            .fail(function (err) {
                defer.reject(err);
            });

        return defer.promise;
    },

    postTickets = function (retrospective) {
        var promises = [];

        console.log('posting tickets');

        tickets.forEach(function (ticket) {
            var defer = q.defer();

            ticket.retroId = retrospective.id;

            db.post(ticket).ofType('ticket').into(config.db.index)
                .then(function (result) {
                    defer.resolve(result);
                })
                .fail(function (err) {
                    defer.reject(err);
                });
        });

        return q.all(promises);
    };

db.checkIndexExists(config.db.index)
    .then(handleDbExists)
    .then(createDb)
    .then(postRetrospective)
    .then(postTickets)
    .fail(handleError);
