var express = require('express');
var World = require('./lib/world.js');
var config = require('./lib/config.js');
var app = express();

var world = new World(config);


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/world', function (req, res) {
    res.send(world.getAntCount());
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});