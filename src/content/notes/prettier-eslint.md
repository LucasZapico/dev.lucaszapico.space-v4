---
title: 'Eslint and Prettier General Config'
description: 'My 2020 configuration of Prettier and Eslint'
date-created: 2020/10/21
last-modified: '2022/10/22'
isdraft: false
categories: ['dev-env', 'notes']
tags: ['prettier', 'eslint']
type: 'note'
---

## File

### Ignore next line

```
/* eslint-disable no-eval */

```

## Machine

```shell
brew install eslint
```

```shell
brew install prettier
```

## Project

```shell
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

```shell
touch .prettierrc
```

```shell
npx eslint --init
```

### Prettier Example

_.prettierrc_

```json
// .prettierrc
{
  "arrowParens": "avoid",
  "semi": false,
  "singleQuote": true,
  "printWidth": 70
}
```

### Eslint Example

_.eslint.json_

```json
// .eslint.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["prettier", "eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["prettier", "react"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

## References

[Prettier & Eslint - Rw;eruch](https://www.robinwieruch.de/prettier-eslint)

[Prettier Eslint in VSCode - Rw;eruch](https://www.robinwieruch.de/how-to-use-prettier-vscode)
