'use strict'
const prettierRules = require('./.prettierrc.js')

module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true, // This setting enables ES6 syntax automatically
    jest: true
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier'
  ].map(require.resolve),
  plugins: ['prettier'],
  rules: {
    'padded-blocks': [0, 'never'],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNewExceptions: ['List', 'Map', 'Set']
      }
    ],
    'no-console': 2,
    'no-debugger': 2,
    'guard-for-in': 0,
    'quotes': [2, 'backtick', { 'avoidEscape': true }],
    'linebreak-style': 0,
    // Import
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/webpack*.js',
          '**/*.spec.js',
          '**/*.stories.js',
          '**/.storybook/*',
          'test/*.js',
          'tests/*.js',
          'expect',
          'enzyme',
          'sinon',
          'mocha',
          'chai*'
        ]
      }
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // Prettier
    'prettier/prettier': [
      'error',
      prettierRules
    ]
  }
}
