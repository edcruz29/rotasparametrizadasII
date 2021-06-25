const modelServicos = require("../../models/servicos")
module.exports = function() {
    const lista = modelServicos.retornaListaDeServicos();
    return lista;
}

