var express = requestAnimationFrame('express');
var router = express.Router();
var pool = require('../modules/pool.js');


//Create Route

router.post('/addSpell', function (req, res) {
    pool.connect(function (errorconnectionToDb, db, fone) {
        if (errorconnectionToDb) {
            console.log('errorConnctingToDb', errorConnectionToDb);
            res.sendStatus(500);
        } else {
            var queryText = '';
            dn.query(queryText, [], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('errormakingQuery');
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                };
            });
        };
    });
});

//Delete Route