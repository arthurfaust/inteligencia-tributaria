const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const rate_limit = require('express-rate-limit');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const indexRouter = require('./routes/index');

const app = express();

const limiter = rate_limit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: 'Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, // Evita salvar sessões não modificadas
  cookie: { 
    httpOnly: true, // Impede que scripts no navegador leiam o cookie (Proteção XSS)
    maxAge: 60 * 60 * 1000, // 1 hora
    sameSite: 'strict', // Protege contra ataques CSRF
    secure: process.env.NODE_ENV === 'production' // Garante que o cookie seja enviado apenas em conexões HTTPS em produção
  }
}));

// Configuração do motor de templates (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(limiter);
app.use(logger('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// Rota principal da aplicação
app.use('/', indexRouter);

// Tratamento de erros de rota não encontrada (404)
app.use(function(req, res, next) {
  next(createError(404));
});

// Gerenciador global de erros
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
