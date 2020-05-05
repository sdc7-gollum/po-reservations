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
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  // globals: {
  //   "useState": "readonly",
  //   "useEffect": "readonly",
  //   "useContext": "readonly",
  //   "useReducer": "readonly",
  //   "useMemo": "readonly",
  //   "useRef": "readonly",
  //   "useImperativeHandle": "readonly",
  //   "useLayoutEffect": "readonly",
  //   "useDebugValue": "readonly",
  // }
};
