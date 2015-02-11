module.exports = (function(){

    function World(config) {
        function privateFunction() {}

        var world = {};
        world.getAntCount = function() {
            return config.world.num_ants;
        };

        return world;
    };


    return World;

})();



