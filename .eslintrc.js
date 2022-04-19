/*
 * @Author: 彭璟
 * @Date: 2022-03-15 15:09:37
 * @LastEditors: 彭璟
 * @LastEditTime: 2022-04-19 14:59:06
 * @Description: File description
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  globals: {
    require: true
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-explicit-any': ['off']
  }
}
