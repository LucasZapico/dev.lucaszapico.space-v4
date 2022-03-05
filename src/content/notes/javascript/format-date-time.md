---
title: 'format date time'
description: ''
date-created: '2022/02/15'
last-modified: '2022/02/15'
isdraft: false
categories: ['javascript', 'notes']
tags: ['javascript', 'notes','reference']
type: 'note'
---

### Examples

__Option One__
```javascript 
const date = new Date()
console.log(date) // Tue Feb 15 2022 05:33:57 GMT-0700 (Mountain Standard Time)
```

__Option Two__
```javascript 
const date = new Date().toDateString()
console.log(date) // Tue Feb 15 2022
```

__Option Three__
```javascript 
const options = {
timeZone: 'America/New_York',
month: "short",
day: "numeric",
hour: 'numeric',
minute: 'numeric'
};
const date = new Date().toLocaleDateString('en-us', options)
console.log(date) // Feb 15, 7:33 AM
```


### References

[How to format a number as a currency value in JavaScript](https://flaviocopes.com/how-to-format-number-as-currency-javascript/)
