const { generatePermalink } = require("../../../utils/generatePermalink")

module.exports = function() {
  return {
    layout: 'layouts/base.webc',
    permalink: (data) => generatePermalink(data.item),
    pagination: {
      addAllPagesToCollections: true,
      data: 'modularPages',
      size: 1,
      resolve: 'values',
      alias: 'item'
    },
  }
}
