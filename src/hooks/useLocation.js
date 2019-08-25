/**
 * Handles location in Redux to use it in
 * components outside Routes like Header
 * @param {string} path
 * @param {Object} location
 * @param {Function} fn
 */
function useLocation(path, location, fn) {
  const { pathname } = location;
  if (path !== pathname) fn(pathname);
}

export default useLocation;
