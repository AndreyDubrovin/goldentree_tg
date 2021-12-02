// конфиг api
const apiConfig = {
  baseUrl: "https://api.goldentree.su",
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  sendMessageTg() {
    return fetch(`${this.baseUrl}/telegram/sendmessage`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        text: 'тестовое сообщение из нода',
      })
    }).then(this._getResponseData);
  }

  sendFotoTg(file) {
    return fetch(`${this.baseUrl}/telegram/sendfoto`, {
      method: 'POST',
/*       headers: this.headers, */
      body: file,
    }).then(this._getResponseData);
  }
}
//экспорт api
const api = new Api(apiConfig);
export default api;
