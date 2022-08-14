const config = require('@arsams/prettierrc')

module.exports = {
  ...config,
  // Your own rules or overrides

  importOrder: ['<THIRD_PARTY_MODULES>', '^@/utils/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
