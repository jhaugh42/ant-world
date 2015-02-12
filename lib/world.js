module.exports = (function(){

    function World(config) {

        var Emitter = require('events').EventEmitter;
        var emitter = new Emitter();
        var worldInterval;
        var numTicks = 0;

        var world = {};

        world.getAntCount = function() {
            return config.world.num_ants;
        };

        world.getNumTicks = function() {
            return numTicks;
        };

        world.start = function() {
            worldInterval = setInterval(function(){
                emitter.emit('tick', {tick: 'tock'});
            }, config.world.tick_interval_ms);
        };

        world.stop = function() {
            clearInterval(worldInterval);
        };

        emitter.on('tick', function(message){
            numTicks++;
        });

        return world;
    };


    return World;

})();



