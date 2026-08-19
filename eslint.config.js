const pluginCypress = require('eslint-plugin-cypress');

module.exports = [
  pluginCypress.configs.recommended,
  {
    files: ['cypress/**/*.js'],
    rules: {
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-assigning-return-values': 'error',
      'cypress/unsafe-to-chain-command': 'warn',
    },
  },
];
