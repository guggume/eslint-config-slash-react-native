# Installation
```shel
yarn add config-slash-eslint-native --dev
```
## Usage
Create `.eslintrc.js` and place the below content
```js
module.exports = {
  root: true,
  extends: 'config-slash-eslint-native'
};

```

## Override Configuration
Update `.eslintrc.js` with the below content
```js
module.exports = {
  root: true,
  extends: 'config-slash-eslint-native',
  "no-unused-vars": 0
};
```
