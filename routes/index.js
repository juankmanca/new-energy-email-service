var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("La pagina de Inicio");
});

module.exports = router;
