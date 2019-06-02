export function getLocalStorage(item = '') {
  if (item) {
    return localStorage.getItem(item) ? localStorage.getItem(item) : false;
  }

  return false;
}

export function fake() {}
