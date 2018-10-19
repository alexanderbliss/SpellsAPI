var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));


//routes



app.listen(port, function(){
    console.log('listening on port:', port)
});