var ejs = require('elastic.js'),
    nc = require('elastic.js/elastic-node-client'),
    routes = require('./routes'),
    express = require('express'),
    api = express();

// default elasticsearch port is 9200
ejs.client = nc.NodeClient('localhost', '9200');

api.use(express.methodOverride());
api.use(express.json());

routes.setup(api, ejs);

api.use(express.logger('dev'));

api.listen(3000);
