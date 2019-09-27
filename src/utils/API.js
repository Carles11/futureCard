import CONFIG from '../config';

function getOptions(method, body) {
  const configDefault = CONFIG.OPTION[method];
  const token = localStorage.getItem(CONFIG.API_TOKEN)
    ? localStorage.getItem(CONFIG.API_TOKEN)
    : '';

  const options = Object.keys(body).length
    ? Object.assign({}, configDefault, {
      body: JSON.stringify(body),
      'access-token': token,
    })
    : configDefault;

  return options;
}

async function query(method, url, body = {}) {
  try {
    if (!method || !url) throw new Error('Not enough params in your request');

    const options = getOptions(method, body);
    const request = await fetch(`${CONFIG.API_URL}${url}`, options);
    const response = await request.json();

    return response;
  } catch (error) {
    return { success: false, error, data: [] };
  }
}

async function logIn(body) {
  try {
    const options = getOptions('POST', body);
    const request = await fetch(`${CONFIG.API_AUTH}signin`, options);
    const response = await request.json();

    localStorage.setItem('token', response.data);

    return response;
  } catch (error) {
    return { success: false, error, data: [] };
  }
}

export default {
  get: url => query('GET', url),
  post: (url, body) => query('POST', url, body),
  put: (url, body) => query('PUT', url, body),
  delete: url => query('DELETE', url),
  logIn: body => logIn(body),
};
