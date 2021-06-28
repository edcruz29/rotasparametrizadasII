const { v4 } = require("uuid");
const ServicosModel= require("../../models/Servico");

const ServicosController = {
  listar: (req, res) => {
    const servicos = ServicosModel.findAll();
    res.json(servicos);
  },
  buscar:(req,res) =>{
    const { id } = req.params;
    const pizzas = ServicosModel.findById(id);
    res.json(pizzas);
  },
  criarUmServico: (req, res) => {
    const { nome, preco } = req.body;

    const servico = {
      id: v4(),
      nome,
      deleted: false,
      preco,
    };

    ServicosModel.create(servico);

    res.status(201).json(servico);
  },
  editarUmServico: (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    const servicoEncontrado = ServicosModel.findById(id);

    if (!servicoEncontrado) {
      return res.status(400).json({ mensagem: "Serviço Desconhecido" });
    }


    ServicosModel.update(servicoEncontrado, nome, preco);

    return res.json(servicoEncontrado);
  },
  deletarUmServico: (req, res) => {
    const { id } = req.params;

 ServicosModel.destroy(id);
  res.status(204).json();
  },
};

module.exports = ServicosController;
