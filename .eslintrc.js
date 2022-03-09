module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "quotes": [
      "error",
      "unix"
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
          "ignorePattern": "pragma|ignored",
          "ignoreInlineComments": true
      }
  ]
  },
};
