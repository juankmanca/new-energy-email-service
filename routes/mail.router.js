var express = require('express');
var router = express.Router();
const allowCors = require('../api/handler')
const {
  main
} = require('../controllers/mail.controller');

allowCors(main)

/* POST send email. */
router.post('/solicitarInformacion', main);

module.exports = router;
