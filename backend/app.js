const express = require('express');
const { errors } = require('celebrate');
const errorsHandler = require('./middlewares/errorsHandler');
const NotFoundError = require('./errors/not-found-err');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

require('dotenv').config();

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(cors);

app.use('/telegram', require('./routes/telegram'));

app.use('/', (req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
});
