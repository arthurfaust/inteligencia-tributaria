var express = require('express');
var router = express.Router();
const { limiter } = require('../middlewares/rate_limit');
const formController = require('../modules/form/formController');
const diagnosticController = require('../modules/diagnostic/diagnosticController');

router.get('/formulario', limiter, formController.renderForm);
router.post('/formulario', limiter, formController.submitForm);

router.get('/diagnostic', limiter, diagnosticController.generateDiagnostic);

module.exports = router;
