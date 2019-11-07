//importaciones
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleConstructor = require("role.constructor");
var numHarvesterCreeps = 1;
var numConstructorCreeps = 0;
var numUpgraderCreeps = 15;
var numCreeps = numHarvesterCreeps + numUpgraderCreeps + numConstructorCreeps;

function comprobarNumCreeps(){
  Memory.numCreeps = new Object();
  Memory.numCreeps.Harvester = 0;
  Memory.numCreeps.Constructor = 0;
  Memory.numCreeps.Upgrader = 0;
  for (const name in Game.creeps) {
      if (name.substr( 0, 3) == "har") {
          Memory.numCreeps.Harvester++;
      }
      if (name.substr( 0, 3) == "upg") {
          Memory.numCreeps.Upgrader++;
      }
      if (name.substr( 0, 3) == "con") {
          Memory.numCreeps.Constructor++;
      }
  }

}


module.exports.loop = function () {

    comprobarNumCreeps();
  //Funcion para cada creep
    if (Object.keys(Game.creeps).length < numCreeps) {
       if(Memory.numCreeps.Harvester < numHarvesterCreeps){
         var name = "harvester" + Date.now();
         Game.spawns["Spawn1"].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], name);
       }
       else if(Memory.numCreeps.Constructor < numConstructorCreeps){
         var name = "constructor" + Date.now();
         Game.spawns["Spawn1"].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], name);
       }
       else if(Memory.numCreeps.Upgrader < numUpgraderCreeps){
         var name = "upgrader" + Date.now();
         Game.spawns["Spawn1"].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], name);
       }
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (name.substr( 0, 3) == "har") {
            roleHarvester.run(creep);
        }
        if (name.substr( 0, 3) == "upg") {
            roleUpgrader.run(creep);
        }
        if (name.substr( 0, 3) == "con") {
            roleConstructor.run(creep);
        }
    }

    //Limpieza de memoria de creeps
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
        }
    }

    //limpieza de estructuras construidas
    for(const build in Memory.builds){
      if((name in Game.structures)){
        delete Memory.builds[name];
      }
    }
}
