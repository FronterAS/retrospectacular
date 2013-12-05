var allowCrossDomain = function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);

    next();
};

exports.setup = function (api, ejs) {
    api.get('/', allowCrossDomain);

    api.get('/results', function (req, res) {
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
};
