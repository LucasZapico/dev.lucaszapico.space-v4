---
title: "Enhance Console Logs"
description: 'Notes and example for enhanced console.log statements'
date-created: 2021/08/28
last-modified: 2021/08/28 10:22:22
isdraft: true
categories: ['env', 'node', 'javascript']
tags: ["env", 'logging']
type: 'note'
---
## Install 

```shell
npm install chalk
```

### Basic Usage 

```javascript
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
```

or 

```javascript
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```


### Example

```javascript
// abstract log 
const log = console.log;
const logSp = log(
  chalk.redBright(`

=================================

`)
);

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
logSp
log(chalk.blue.bgRed.bold('Hello world!'));

```

### Size 

- example

### Color 

- example

### Background Color 

- example