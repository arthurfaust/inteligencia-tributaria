var express = require('express');
var router = express.Router();
const { limiter } = require('../middlewares/rate_limit');
const formController = require('../modules/form/formController');

router.get('/formulario', limiter, formController.getForm);

router.post('/formulario', limiter, formController.submitForm);

module.exports = router;
