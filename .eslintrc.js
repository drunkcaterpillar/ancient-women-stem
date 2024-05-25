import React from 'react';
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Added this line to recognize Jest globals
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect', // Added this line to detect the React version
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Added this line to disable the rule requiring React in scope
  },
};
