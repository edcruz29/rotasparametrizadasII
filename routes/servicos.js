const express = require("express");
const router = express.Router();
const ServicoController = require("../Controller/servicos/ServicoController");

router.get("/", ServicoController.listar);

router.get("/:id", ServicoController.buscar);
router.post("/", ServicoController.criarUmServico);

router.put("/:id", ServicoController.editarUmServico);

router.delete("/:id", ServicoController.deletarUmServico);

module.exports = router;
