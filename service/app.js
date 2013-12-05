var ejs = require('elastic.js'),
    nc = require('elastic.js/elastic-node-client'),
    express = require('express'),
    app = express();

ejs.client = nc.NodeClient('localhost', '9200');

app.use(express.json());

app.get('/', function (req, res) {
    var termQuery = ejs.TermQuery('message', 'hello'),

        /* a function to display results */
        resultsCallBack = function (results) {
            if (results.hits) {
                var hits = results.hits.hits;

                hits.forEach(function (hit) {
                    console.log(hit._source.message);
                });
            }
        },

        /* execute the request */
        r = ejs.Request()
                .collections('twitter')
                .types('tweet')
                .query(termQuery);

    r.doSearch(resultsCallBack);

    res.json('boom');
});

app.use(express.logger('dev'));

var allowCrossDomain = function (req, res, next) {
    if (!req.get('Origin')) {
        return next();
    }

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);

    if ('OPTIONS' == req.method) {
        return res.send(200);
    }

    next();
};

app.listen(3000);
