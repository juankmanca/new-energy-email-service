var express = require('express');
var router = express.Router();
const { main } = require('../controllers/mail.controller');
const { responses } = require('../middlewares/responses');

/* POST send email. */
router.post('/solicitarInformacion', responses, main);

module.exports = router;
