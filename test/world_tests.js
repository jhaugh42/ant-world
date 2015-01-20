
var assert = require('assert');

describe('world', function(){

    var mockConfig = {
      world:{
          num_ants: 999
      }
    };

    it('initializes with configured number of ants', function(){
        var World = require('../lib/world.js');

        var world = World(mockConfig);

        assert.equal(world.num_ants, mockConfig.world.num_ants);

    });


});