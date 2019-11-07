/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.constructor');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
  run: function(constructor){
    if(constructor.carry.energy == constructor.carryCapacity){
            constructor.memory.conRecursos = 1;
            //console.log("fullRecursos");
      }

    if (Memory.builds == undefined){
        Memory.builds = constructor.room.find(FIND_CONSTRUCTION_SITES);
        console.log("busco estructuras");
    }


    if(worker.carry.energy < worker.carryCapacity && worker.memory.conRecursos == 0){

      sources = worker.room.find(FIND_SOURCES);
      if(worker.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            worker.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
      }

        //console.log("pasa de la comprobacion lleno");
    }
    else {

      if (worker.build(Memory.builds[0]) == ERR_NOT_IN_RANGE) {
          worker.moveTo(Memory.builds[0], { visualizePathStyle: { stroke: '#ffffff' } });
      }

      if(worker.carry.energy == 0){
            worker.memory.conRecursos = 0;
            //console.log("outRecursos");
      }
    }
  }
};
