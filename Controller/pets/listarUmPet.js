const modelPet = require("../../models/pets")
module.exports = function(index) {
    const pet= modelPet.retonarUmPet(index);

    /**
     * faria algum tratamento no código se necessário
     */

    return pet;
}

