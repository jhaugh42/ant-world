var express = require('express');
var World = require('./lib/world.js');
var config = require('./lib/config.js');
var app = express();

var world = new World(config);


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/world', function (req, res) {
    res.send({numAnts : world.getAntCount(), numTicks: world.getNumTicks()});
});

app.post('/world/start', function(req, res) {
    world.start();
    res.send({message: 'starting world'});
});

app.post('/world/stop', function(req, res) {
    world.stop();
    res.send({message: 'stopping world'});
});

var server = app.listen(3000);