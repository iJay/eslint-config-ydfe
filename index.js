const rules = require('./rules');

module.exports = {
  root: true,

  browser: true,

  node: true,

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  
  rules
}