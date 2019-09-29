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

export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexEdited = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b,
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexEdited);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

export function scrollToFn(scrollTo) {
  setTimeout(() => {
    document.querySelector(`${scrollTo}`).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
}

export function formatDate(date) {
  const dateFormat = new Date(date);
  const day = dateFormat.getDate();
  const month = dateFormat.getMonth() + 1;
  const year = dateFormat.getFullYear();

  return `${day}/${month}/${year}`;
}
