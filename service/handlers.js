var ejs = require('elastic.js'),
    nc = require('elastic.js/elastic-node-client');

// default elasticsearch port is 9200
ejs.client = nc.NodeClient('localhost', '9200');

exports.getResults = function (req, res) {
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
};
