const { getServerlessItem } = require('../../../utils/getServerlessItem');

module.exports = function() {
  return {
    layout: 'layouts/base.webc',
    permalink: {
      previewmodular: '/preview/modular/',
    },
    eleventyComputed: {
      item: data => getServerlessItem(data, 'modularPages'),
    }
  }
}
