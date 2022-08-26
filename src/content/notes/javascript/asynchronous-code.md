---
title: 'Asynchronous Javascript'
description: 'Asynchronous javascript notes and examples'
date-created: 2021/03/15
last-modified: '2022/08/24'
isdraft: false
categories: ['JavaScript', 'general', 'notes']
tags: ['JavaScript', 'general', 'notes']
type: 'note'
---

### Asynchronous Code

#### setTimeout

A function that asynchronously invokes a callback after a delay in milliseconds
**Simple Example 1**

```JavaScript
// setTimeout usage
function callback() {
  console.log("callback function");
}
var delay = 1000; // Delay is in ms
setTimeout(callback, delay);
```

**Simple Example - anonymous function**

```JavaScript
setTimeout(function(){
  console.log("Runs in approx. 2000ms");
  }, 2000);
```

#### setInterval

**Simple Example 1**

```JavaScript
// setInterval usage
function callback() {
  console.log("callback is called continuously");
}
var repeat = 3000;
setTimeout(callback, repeat);
```

**Simple Example - anonymous function**

```JavaScript
var num = 0;
setInterval(function(){
  num++;
  console.log("num:", num);
}, 1000);
```

**Simple Example - cancel interval**

```JavaScript
var num = 0;
var intervalId = setInterval(function() {
  num++;
  console.log("num", num);
  if(num === 3){
    clearInterval(intervalId);
  }
}, 1000);
```
