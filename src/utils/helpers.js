export function handleLocalStorage(action = '', item = '', data = '') {
  let payload;

  if (!item) return false;

  if (data) {
    payload = typeof data === 'string' ? data : JSON.stringify(data);
  }

  const success = localStorage.getItem(item);

  switch (action) {
    case 'CREATE':
      return localStorage.setItem(item, payload);
    case 'READ':
      return success
        ? typeof success === 'string'
          ? success
          : JSON.parse(localStorage(item))
        : false;
    case 'DELETE':
      return localStorage.removeItem(item);
    default:
      return false;
  }
}

export function fake() {}
