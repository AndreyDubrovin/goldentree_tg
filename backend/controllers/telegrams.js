/* const NotFoundError = require('../errors/not-found-err'); // 404 */
const TelegramBot = require('node-telegram-bot-api');
const BadRequest = require('../errors/bad-request'); // 400
/* const Unauthorized = require('../errors/unauthorized'); // 401 */
/* const ConflictingRequest = require('../errors/сonflicting-request'); // 409 */

const { TOKEN_TELEGRAM } = process.env;
const chatId = -515771129;
const bot = new TelegramBot(TOKEN_TELEGRAM, { polling: false });

module.exports.sendMessage = (req, res, next) => {
  const { text } = req.body[0];
  bot.sendMessage(chatId, text)
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.sendFoto = (req, res, next) => {
  console.log('пришёл запрос на добавление картинки');
  const filedata = req.file;
  if (!filedata) {
    const badrequest = new BadRequest('Не верный формат картинки');
    next(badrequest);
  } else {
    const {
      name, surname, patronymic, telegram, code, telephone,
    } = req.body;
    const data = req.file.path;
    const fileOptions = {
      contentType: 'multipart/form-data',
    };
    bot.sendPhoto(chatId, data, { caption: `Код сертификата: ${code}\nФИО: ${surname} ${name} ${patronymic} \nИнстаграмм:${telegram}\nТелефон для связи: ${telephone}` }, fileOptions)
      .then(() => res.send({ message: 'Заявка на регистрацию принята' }))
      .catch((err) => {
        console.log(err)});
      /* .catch(next); */
  }
};
