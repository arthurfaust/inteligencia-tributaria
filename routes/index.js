var express = require('express');
var router = express.Router();
const { limiter } = require('../middlewares/rate_limit');

router.get('/formulario', limiter,(req, res) => {
  res.render('formulario');
});

router.post('/formulario', limiter, (req, res) => {
  const data = req.body;
  res.json({
    message: 'Formulário recebido com sucesso!',
    data: data
  });
});

module.exports = router;
