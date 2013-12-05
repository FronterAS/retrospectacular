var routes = require('./routes'),
    express = require('express'),
    api = express();

api.use(express.methodOverride());
api.use(express.json());

routes.setup(api);

api.use(express.logger('dev'));

api.listen(3000);
