## package version

```
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/joy": "^5.0.0-beta.0",
    "@types/node": "^16.18.39",
    "@types/react": "^18.2.18",
    "@types/react-dom": "^18.2.7",
    "axios": "^1.4.0",
    "google-auth-library": "^9.0.0",
    "google-spreadsheet": "^4.0.2",
    "i18next": "^23.4.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-i18next": "^13.0.3",
    "react-query": "^3.39.3",
    "react-quill": "^2.0.0",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "recoil": "^0.7.7",
    "typescript": "*",
    "web-vitals": "^2.1.4"

    <!-- eslint -->
    exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

## dependency package

```
    "@typescript-eslint/eslint-plugin": "^5.52.0",
    "@typescript-eslint/parser": "^5.55.0",
    "eslint": "^8.0.1",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "eslint-config-standard-with-typescript": "^37.0.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-n": "^15.0.0 || ^16.0.0 ",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-react": "^7.33.1",
    "eslint-plugin-react-hooks": "^4.6.0"
```

## eslintrc

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition':'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'Prop spreading is forbidden': 'off',
    'Function component is not a function declaration': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-use-before-define":"off",
    'react/display-name': 'off',
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export":"off",
  },
};
```