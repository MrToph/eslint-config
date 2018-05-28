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
  extends: ['./index.js', 'plugin:vue/recommended', 'eslint-config-prettier/react'].map(
    require.resolve
  ),
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: { }
}
