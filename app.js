var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res) { 
        var responseJSON = { hello: "This is my api" };
        res.json(responseJSON);
    });

app.use('/api', bookRouter);

app.get('/', function(req, res) {
    res.send('Welcome to my API');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
})