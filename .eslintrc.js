module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mongo: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    "class-methods-use-this": 0,
    "no-console": 0,
  },
};
