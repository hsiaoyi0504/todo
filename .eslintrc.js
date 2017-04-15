module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0
  },
  'env': {
    browser: true, // let 'window', 'document' defined
    es6: true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
};
