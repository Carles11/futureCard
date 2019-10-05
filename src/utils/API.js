import CONFIG from "../config";

function getOptions(method, body) {
  const type =
    method === "POST" || method === "PUT"
      ? body.creator || body.username
        ? "application/json"
        : ""
      : "application/json";

  const configDefault = CONFIG.OPTION[method];
  const session = localStorage.getItem(CONFIG.API_TOKEN_NAME)
    ? JSON.parse(localStorage.getItem(CONFIG.API_TOKEN_NAME))
    : "";

  const headers = {
    headers: new Headers({
      "access-token": Object.keys(session).length ? session.token : ""
    }),
    mode: "cors"
  };

  if (type) {
    headers.headers.append("Content-Type", type);
  }

  let options = Object.assign({}, configDefault, {
    ...headers
  });

  if (method === "POST" || method === "PUT") {
    options = Object.assign({}, options, {
      body: type ? JSON.stringify(body) : body
    });
  }

  return options;
}

async function query(method, url, body = {}) {
  try {
    if (!method || !url) throw new Error("Not enough params in your request");

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
    const options = getOptions("POST", body);
    const request = await fetch(`${CONFIG.API_AUTH}signin`, options);
    const response = await request.json();

    localStorage.setItem(CONFIG.API_TOKEN_NAME, JSON.stringify(response.data));

    return response;
  } catch (error) {
    return { success: false, error, data: [] };
  }
}

export default {
  get: url => query("GET", url),
  post: (url, body) => query("POST", url, body),
  put: (url, body) => query("PUT", url, body),
  delete: url => query("DELETE", url),
  logIn: body => logIn(body)
};
