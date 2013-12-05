var db = require('../wrapper'),
    q = require('q'),

    tickets = [{
        'role': 'pro',
        'message': 'We learned loads'
    },{
        'role': 'con',
        'message': 'Then we forgot most of it'
    }],

    handleError = function (err) {
        console.log(err);
    },

    handleDbExists = function (exists) {
        if (exists) {
            console.log('db exists, deleting it');
            return db.destroyIndex('retrospectives');
        }
    },

    createDb = function () {
        console.log('creating new db');
        return db.createIndex('retrospectives');
    },

    postRetrospective = function () {
        var defer = q.defer();

        console.log('posting retrospective');

        db.postData({'name': 'Sprint 1'}).ofType('retrospective').into('retrospectives')
            .then(function (result) {
                console.log(result)
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

            ticket.retroId = retrospective._id;

            db.postData(ticket).ofType('ticket').into('retrospectives')
                .then(function (result) {
                    defer.resolve(result);
                })
                .fail(function (err) {
                    defer.reject(err);
                });
        });

        return q.all(promises);
    };

db.checkIndexExists('retrospectives')
    .then(handleDbExists)
    .then(createDb)
    .then(postRetrospective)
    .then(postTickets)
    .fail(handleError);
