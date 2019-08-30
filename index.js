const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define: {
    COPY_SELECTOR: options.copy_selector || 'div[class*="language-"] pre',
    TITLE: options.title
  },
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})
