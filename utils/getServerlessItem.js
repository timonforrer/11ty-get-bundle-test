const get = require('lodash/get');

const getServerlessItem = function(data, key) {
  // if not in serverless environment: exit
  if (!data.eleventy.serverless) return null;
  const { id } = data.eleventy.serverless.query;
  const item = get(data, key);
  return get(item, id);
}

module.exports = { getServerlessItem };
