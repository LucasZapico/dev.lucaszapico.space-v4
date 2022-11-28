---
title: "Eslint and Prettier General Reference Config"
description: "Genreal notes on configuration of Prettier and Eslint"
date-created: 2020/10/21
last-modified: "2022/10/22"
isdraft: false
categories: ["dev-env", "notes"]
tags: ["prettier", "eslint"]
type: "note"
---

## CheatSheet

## Check lint

```shell
TIMING=1 npm run lint
```

### File Level

```
/* eslint-disable */
```

#### disable by rule on file

```
/* eslint no-use-before-define: 0 */  // --> OFF

or

/* eslint no-use-before-define: 2 */  // --> ON
```

#### Ignore next line

```
/* eslint-disable no-eval */

```

```
Put /* eslint-disable-line */ at the end of the line(s),
or /* eslint-disable-next-line */ right before the line.
```

## Setting Up ESLint and Prettier

### Machine Level

> 🗒️ Installing at the machine level is a matter of prefference

```shell
brew install eslint
```

```shell
brew install prettier
```

### Project Level

#### VSCode Prep

```json:title=".vscode/setting.json"
{
  //....
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  //....
}
```

To have this Eslint and Prettier handle all languages

```json:title=".vscode/setting.json"
{
 //....
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
   //....
}
```

or configure by language

```json:title=".vscode/setting.json"
{
 //....
 "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
   //....
}
```

#### Node/JavaScript Project Setup

```shell
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```

```shell
touch .prettierrc
```

```shell
npx eslint --init
```

##### Eslint Config Example

```json:title=".eslint.json"
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

##### Prettier Config Example

```json:title=".prettierrc.json"
// .prettierrc.json
{
  "arrowParens": "avoid",
  "semi": false,
  "singleQuote": true,
  "printWidth": 70
}
```

##### Turning Rules off

```json:title=".eslint.json"
{
  // ...
  "rules": {
    "prefer-const": "off" // Turn rule off
  }
}
```

#### TypeScript Project Setup

```sh
npm i --dev @typescript-eslint/eslint-plugin
```

```json:title=".eslint.json"
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // I suggest you add those two rules:
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

## References

[Prettier & Eslint - Rw;eruch](https://www.robinwieruch.de/prettier-eslint)

[Prettier Eslint in VSCode - Rw;eruch](https://www.robinwieruch.de/how-to-use-prettier-vscode)

[Start a clean Next.js project with TypeScript, ESLint and Prettier - paulinTrognon.fr](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js)
