/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(worker){
      if(worker.carry.energy == worker.carryCapacity){
              worker.memory.conRecursos = 1;
              //console.log("fullRecursos");
        }

      if (Memory.sources == undefined){
          Memory.sources = worker.room.find(FIND_SOURCES);
          console.log("genero recursos");
      }

      if(worker.carry.energy < worker.carryCapacity && worker.memory.conRecursos == 0){

        sources = worker.room.find(FIND_SOURCES);
        if(worker.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              worker.moveTo(sources[0], { visualizePathStyle: { stroke: '#ffaa00' } });
        }

          //console.log("pasa de la comprobacion lleno");
      }
      else {

        if (worker.upgradeController(worker.room.controller) == ERR_NOT_IN_RANGE) {
            worker.moveTo(worker.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });
        }

        if(worker.carry.energy == 0){
              worker.memory.conRecursos = 0;
              //console.log("outRecursos");
        }
      }
    }
};
