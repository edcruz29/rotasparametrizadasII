const modelPet = require("../../models/pets");
module.exports = function () {
  const lista = modelPet.retornaListaDePets();

  /**
   * faria algum tratamento no código se necessário
   */

  return lista;
};
