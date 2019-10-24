//importaciones
var roleHarvester = require("role.harvester");
var numCreeps = 3;


module.exports.loop = function () {


  //Funcion para cada creep
    if (Object.keys(Game.creeps).length < numCreeps) {
        var name = "worker" + Date.now();
        Game.spawns["Spawn1"].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], name);
        //console.log("genero creep: " + Object.keys(Game.creeps).length);
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }

    //Limpieza de memoria de creeps
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
        }
    }
}
