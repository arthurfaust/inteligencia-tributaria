const rate_limit = require('express-rate-limit');

const limiter = rate_limit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: 'Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'
});

const loginLimiter = rate_limit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limite de 5 tentativas de login por IP
  message: 'Muitas tentativas de login feitas a partir deste IP, por favor tente novamente mais tarde.'
});

module.exports = { limiter, loginLimiter };