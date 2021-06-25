const  listaDePets  = require("../database/pets.json");


exports.retornaListaDePets = () => listaDePets;

exports.retonarUmPet = (index) => listaDePets[index];
