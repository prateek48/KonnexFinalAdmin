module.exports = {
  
  parser: "babel-eslint",
  root: true,
  extends: '@react-native-community',
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    'prettier/prettier': 0,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
   
  ],
};
