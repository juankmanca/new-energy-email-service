var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("La pagina de Inicio");
});

module.exports = router;
