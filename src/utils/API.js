import CONFIG from '../config';

const API = {
  get: url => query('GET', url),
  post: (url, body) => query('POST', url, body),
  put: (url, body) => query('PUT', url, body),
  delete: url => query('DELETE', url),
};

async function query(method, url, body = {}) {
  try {
    if (!method || !url) throw new Error('Not enough params in your request');

    const configDefault = CONFIG.OPTION[method];
    const options = Object.assign(body).length
      ? Object.assign({}, configDefault, {
        body: JSON.stringify(body),
      })
      : configDefault;

    const request = await fetch(`${CONFIG.API_URL}${url}`, options);
    const response = await request.json();

    return response;
  } catch (error) {
    return { success: false, error, data: [] };
  }
}

export default API;
