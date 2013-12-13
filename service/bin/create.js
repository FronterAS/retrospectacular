var db = require('../wrapper'),
    q = require('q'),
    createdAt = JSON.stringify(new Date()),

    tickets = [{
        'role': 'pro',
        'message': 'We learned loads',
        'createdAt' : JSON.parse(createdAt),
        'tags': [],
    },{
        'role': 'con',
        'message': 'Then we forgot most of it',
        'createdAt': JSON.parse(createdAt),
        'tags': []
    }],

    tags = [
        {
            'name': 'jira'
        },
        {
            'name': 'team spirit'
        },
    ],

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

        db.post({'name': 'Sprint 1'}).ofType('retrospective').into('retrospectives')
            .then(function (result) {
                console.log(result);
                defer.resolve(result);
            })
            .fail(function (err) {
                defer.reject(err);
            });

        return defer.promise;
    },

    postTags = function () {
        var promises = [];

        console.log('posting tags');

        tags.forEach(function (tag) {
            var defer = q.defer();

            db.post(tag).ofType('tag').into('retrospectives')
                .then(function (result) {
                    defer.resolve(result);
                })
                .fail(function (err) {
                    defer.reject(err);
                });
        });

        return q.all(promises);
    },

    postTickets = function (retrospective) {
        var promises = [];

        console.log('posting tickets');

        tickets.forEach(function (ticket) {
            var defer = q.defer();

            ticket.retroId = retrospective.id;

            db.post(ticket).ofType('ticket').into('retrospectives')
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
    .then(postTags)
    .fail(handleError);
