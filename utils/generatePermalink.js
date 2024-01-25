const { normalizeURL } = require('./normalizeURL');

const generatePermalink = function({ slug }) {
  const path = slug.endsWith('.html') ? slug : slug + '/index.html';
  const permalink = normalizeURL('/' + path, { removeTrailing: true });
  return {
    build: permalink
  };
}

module.exports = { generatePermalink };
