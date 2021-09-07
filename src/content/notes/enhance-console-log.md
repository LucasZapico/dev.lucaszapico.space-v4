---
title: 'Enhance Console Logs'
description: 'Notes and example for enhanced console.log statements'
date-created: 2021/08/28
last-modified: 2021/09/06 07:22:44
isdraft: true
categories: ['env', 'node', 'javascript']
tags: ['env', 'logging']
type: 'note'
---

## JavaScript 

```javascript
console.log(`%cNode env ${NODE_ENV}.`, 'color:cyan');
console.log(`%cListening on port: ${PORT}.`, 'color:cyan');
console.log(`%cURL: ${SITE_URL}:${PORT}`, 'color:cyan');
console.log(`%clead url: ${LEAD_API}`, 'color:cyan');
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
