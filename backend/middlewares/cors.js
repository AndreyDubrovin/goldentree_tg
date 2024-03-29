const allowedCors = [
  'http://www.goldentree.su',
  'https://www.goldentree.su',
  'https://goldentree.su',
  'http://goldentree.su',
];

module.exports = (req, res, next) => {
  console.log('пришёл cors');
  const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
  console.log(origin);
  console.log(allowedCors.includes(origin));
  // проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    // устанавливаем заголовок, который разрешает браузеру запросы с этого источника
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  const { method } = req; // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную
  console.log(method);
  // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  // сохраняем список заголовков исходного запроса
  const requestHeaders = req.headers['access-control-request-headers'];
  // Если это предварительный запрос, добавляем нужные заголовки
  console.log(method === 'OPTIONS');
  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // завершаем обработку запроса и возвращаем результат клиенту
    return res.end();
  }
  return next();
};
