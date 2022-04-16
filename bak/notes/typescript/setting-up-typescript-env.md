---
title: Setting Up Typescript Env
description: Notes on setting up TypeScript env
date-created: 2022/01/12
last-modified: 2022/01/29 09:26:50
isdraft: false
categories:
  - typescript
  - env
  - notes
tags:
  - null
type: note
---

## Basic Setup

### Watch Mode

Watch mode only "watches" a single ts file

```shell
tsc app.ts --watch
```

### Init TSC project

At project root

```shell
tsc --init
```

#### Setting tsconfig.json

[Doc - what is tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

_tsconfig.js_

```json
"exclude": [
  "node_modules" // is the defualt

]
"include": [
  "app.ts"
]
```

## React TypeScript Setup
