# Installation
```shel
yarn add eslint-config-slash-react-native --dev
```
## Usage
Create `.eslintrc.js` and place the below content
```js
module.exports = {
  root: true,
  extends: 'slash-react-native'
};

```

## Override Configuration
Update `.eslintrc.js` with the below content
```js
module.exports = {
  root: true,
  extends: 'slash-react-native',
  rules: {
    "no-unused-vars": 1
  }
};
```
