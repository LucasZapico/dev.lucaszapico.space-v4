---
title: 'JavaScript Promises'
description: 'javascript promises notes and examples'
date-created: 2021/03/15
last-modified: '2022/08/24'
isdraft: false
categories: ['JavaScript', 'general', 'notes']
tags: ['JavaScript', 'general', 'notes']
type: 'note'
---

### Promise:

**Concept**
A promise is an object that represents a task tat will be completed in the future.
**Simple Example**

```JavaScript
var p1 = new Promise(function(resolve, reject){
  resolve([1,2,3,4]);
});

p1.then(function(arr){
  console.log("promise p1 resolved with data:", arr);
});
```

**Example: Error Handling**

```JavaScript
var p1 = new Promise(function(resolve, reject){
  reject("ERROR");
});

p1.then(function(data){
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data){
  console.log("Promise p1 was rejected with data:", data);
});

```

**Example:**

```JavaScript
var p1 = new Promise(function(resolve, reject){
  var num = Math.random();
  if(num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p1.then(function(result){
  console.log("Success:", result);
}).catch(function(error) {
  console.log("Error:", error);
})
```

### Promise: Chaining

**Why**: Nesting call backs can get really messy.
**Example 1: Nested Callbacks**

```JavaScript
var counter = 0;
setTimeout(function(){
  counter++;
  console.log("Counter:", counter);
  setTimeout(function() {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function() {
      counter++;
      console.log("Counter:", counter);

    }, 3000);
  }, 2000);
}, 1000);
```

**Why is this bad**:

- code is hard to read
- logic is difficult to follow
- code is not modular (lots of duplication)

**Example 2: Refactor of Example 1 with Promises**

```JavaScript
var counter = 0;
function incCounter() {
  counter ++;
  console.log("Counter", counter);
}

function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then(function(){
  return runLater(incCounter, 2000);
}).then(function() {
  return runLater(incCounter, 3000);
}).then(function() {
  // final .then not necessary
});
```

**Example 3**

```JavaScript
var promise = new Promise(function(resolve, reject){
  resolve(5);
});

promise.then(function(data){
  return data * 2;
}).then(function(data){
  return data + 20;
}).then(function(data){
  console.log(data);
});
// log 30
```

A javascript promise either resolves when true or is rejected when false

**Simple Promise Example**

```javascript
let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('success')
  } else {
    reject('failed')
  }
})

p.then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
})
```
