---
title: "Enhance Console Logs"


---

### Node Example

```javascript
const chalk = require('chalk');

// abstract log 
const log = console.log;
const logSp = log(
  chalk.redBright(`

=================================

`)
);

log(chalk.cyan('query block'), blockName);
logSp
log(chalk.cyan('query'), query);

```

### Size 

- example

### Color 

- example

### Background Color 

- example