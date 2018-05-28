'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true
  },
  // 'plugin:vue/recommended' may _not_ be require.resolved
  extends: [require.resolve('./index.js'), 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: { }
}
