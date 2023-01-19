var express = require('express');
var router = express.Router();
const {
  main
} = require('../controllers/mail.controller');

/* POST send email. */
router.post('/solicitarInformacion', main);

module.exports = router;
