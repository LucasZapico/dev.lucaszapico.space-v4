---
title: Enhance Console Logs
description: Notes and example for enhanced console.log statements
date-created: 2021/08/28
last-modified: 2022/01/29 09:29:16
isdraft: true
categories:
  - env
  - node
  - javascript
tags:
  - env
  - logging
type: note
---

## JavaScript

### Logging With Color Example

```javascript
console.log(`%cNode env ${NODE_ENV}.`, 'color:cyan')
console.log(`%cListening on port: ${PORT}.`, 'color:cyan')
console.log(`%cURL: ${SITE_URL}:${PORT}`, 'color:cyan')
console.log(`%clead url: ${LEAD_API}`, 'color:cyan')
```

### Custom No Production Logging

_DevLogging.js_

```javascript
export const log = (arg) => {
  const { message, data, color } = arg
  if (process.env.NODE_ENV !== 'production') {
    console.log(message, data, color)
  }
}
```

_index.js_

```javascript
log({
  message: `%c
%cNode env ${NODE_ENV},
Listening on port: ${PORT},
URL: ${SITE_URL}:${PORT},
lead url: ${LEAD_API},
`,
  color: 'color:cyan',
})
```

## Node

## Install

```shell
npm install chalk
```

### Basic Usage

```javascript
import chalk from 'chalk'

console.log(chalk.blue('Hello world!'))
```

or

```javascript
const chalk = require('chalk')

console.log(chalk.blue('Hello world!'))
```

## Reference

[Colorful consolelogging](https://www.samanthaming.com/tidbits/40-colorful-console-message/)

### Example

```javascript
// abstract log
const log = console.log
const logSp = log(
  chalk.redBright(`

=================================

`)
)

log(chalk.blue('Hello') + ' World' + chalk.red('!'))
logSp
log(chalk.blue.bgRed.bold('Hello world!'))
```

### Size

- example

### Color

- example

### Background Color

- example
