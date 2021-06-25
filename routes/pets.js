const express = require('express');
const router = express.Router();
const petController = require('../Controller/pets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(petController.listarPets());
});

module.exports = router;
