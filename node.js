'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['./index.js', 'plugin:node/recommended'],
  rules: {
    'no-console': "warn"
  }
}
