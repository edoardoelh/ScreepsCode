/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
  run: function(upgrader){
    if(upgrader.carry.energy == upgrader.carryCapacity){
            worker.memory.conRecursos = 1;
      }
    if (Memory.sources == undefined){
        Memory.sources = upgrader.room.find(FIND_SOURCES);
        console.log("genero recursos");
    }
    if(upgrader.carry.energy < upgrader.carryCapacity && upgrader.memory.conRecursos == 0){

      sources = upgrader.room.find(FIND_SOURCES);
      if(upgrader.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            upgrader.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }
    }
    else {
      if (upgrader.upgradeController(upgrader.room.controller) == ERR_NOT_IN_RANGE) {
          upgrader.moveTo(upgrader.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
      }
      if(upgrader.carry.energy == 0){
            upgrader.memory.conRecursos = 0;
      }
    }
  }
};
