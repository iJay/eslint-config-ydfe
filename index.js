const rules = require('./rules');

module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true // 启用es6全局变量，同时默认设置parserOptions.ecmaVersion = 6
  },  

  parserOptions: {
    ecmaVersion: 6, // 启用es6语法，但没有启用es6全局变量
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  rules
}