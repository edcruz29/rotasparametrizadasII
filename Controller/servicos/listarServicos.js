const modelServicos = require("../../models/servicos")
module.exports = function() {
    const lista = modelServicos.retornaListaDeServicos();

    /**
     * faria algum tratamento no código se necessário
     */

    return lista;
}

