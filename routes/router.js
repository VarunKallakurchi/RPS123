var express = require('express');
var router = express.Router();
// var User = require('../models/user');
var results = 0;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// GET route for reading data
router.get('/', function(req, res, next) {
    return res.sendFile(path.join(__dirname + '/armyresult/index.html'));
});

router.post('/pgt', function(req, res, next) {
    var id = req.body.roll_no;
    id = parseInt(id, 10);
    console.log(id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("result_publication");
        var query = { roll_number: id };
        dbo.collection("PGT").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);

        });     });    }); router.get('/', function(req, res, next) {
return res.sendFile(path.join(__dirname + '/armyresult/index.html')); });

router.post('/prt', function(req, res, next) {
    var id = req.body.roll_no;
    id = parseInt(id, 10);
    console.log(id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("result_publication");
        var query = { roll_number: id };
        dbo.collection("PRT").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);

        });
    });
   });

router.get('/', function(req, res, next) {
    return res.sendFile(path.join(__dirname + '/armyresult/index.html'));
});

router.post('/tgt', function(req, res, next) {
    var id = req.body.roll_no;
    id = parseInt(id, 10);
    console.log(id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("result_publication");
        var query = { roll_number: id };
        dbo.collection("TGT").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);

        });
    });
   });

module.exports = router;