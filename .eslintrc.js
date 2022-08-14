const config = require('@arsams/eslintrc')

module.exports = {
  ...config,


  parserOptions: {
    ...config.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: './'
  },

  plugins: [...config.plugins, 'import']
}
