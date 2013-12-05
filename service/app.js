var express = require('express'),
    app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.json('boom');
});

app.listen(3000);
