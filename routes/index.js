var express = require('express');
var router = express.Router();

router.get('/formulario', function(req, res, next) {
  res.render('formulario');
});

router.post('/formulario', function(req, res, next) {
  const data = req.body;
  res.json({
    message: 'Formulário recebido com sucesso!',
    data: data
  });
});

module.exports = router;
