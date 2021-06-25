const express = require('express');
const router = express.Router();
const servicoController = require("../Controller/servicos");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(servicoController.listarServicos());
});

module.exports = router;
