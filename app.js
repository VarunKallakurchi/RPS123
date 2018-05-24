var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var session = require('express-session');


app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
   
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/armyresult'));

// include routes
var routes = require('./routes/router');
app.use('/', routes);

// define as the last app.use callback
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});


// listen on port 3000
app.listen(3000, function() {
    console.log('Express app listening on port 3000');
})