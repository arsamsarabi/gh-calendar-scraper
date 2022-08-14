const config = require('@arsams/eslintrc')

module.exports = {
  ...config,

  settings: {
    ...config.settings,
    'import/resolver': {
      typescript: {}
    }
  },

  parserOptions: {
    ...config.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: './'
  },

  plugins: [...config.plugins, 'import']
}
