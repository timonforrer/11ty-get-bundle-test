const normalizeURL = (string, { removeTrailing } = {}) => {
  let newString = `/${string}/`.replace(/\/{2,}/g, '/');
  if (removeTrailing) {
    newString = newString.replace(/^\/+|\/+$/g, '')
  }
  return newString;
};

module.exports = { normalizeURL };
