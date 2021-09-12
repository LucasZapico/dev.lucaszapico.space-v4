---
title: 'JavaScript Notes'
description: 'Notes on CORS policy and common error and solutions'
date-created: 2021/03/15 14:19:17
last-modified: 2021/09/01 19:28:23
isdraft: false
categories: ['JavaScript', 'general', 'notes']
tags: []
type: 'note'
---

# JavaScript Notes

### _Description_

---

# JavaScript General Catch

## Fundamentals

### Stack

The stack is an ordered data structure. That keeps track of the functions that have been invoked. The stack is modified when a function is invoked.

When a function is invoked the details are saved to the top of the stack. (pushed to the top)

When a function is returned the information is taken off the top of the stack. (popped of the top)

**The STACK is processed top to bottom**

### Heap

The area in memory where data is stored.

### The Queue

The queue is an ordered list of functions waiting to be placed on the stack.
_First in first out (FIFO)_

### The Event loop

Functionality in the JavaScript runtime that checks the queue when the stack is empty. If the stack is empty, the front of the queue is placed in the stack.

### JavaScript is Single Threaded

Single Threaded: Code execution is linear. Code that is running cannot be interrupted by something else going on in the program.

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

## JavaScript Objects

objects have methods and properties.

```javascript
let names = ['lucas', 'luc', 'James', 'Rafael']

// lenght method
console.log(name.length)
// 4
```

### Primatives

Primative do not have methods. But, javascript is intuitive. This means that JavaScript wraps primatives in objects which enables methods. Thus, making a given priative behave like a object.

- booleans
- strings
- numbers

## First Object

#### Encapsulation

```javascript
let userOne = {
  email: 'ben@earth.com',
  name: 'ben',
}

// ^ this is called encapulation

console.log(userOne.name)
```

```javascript
let userOne = {
  email: 'ben@earth.com',
  name: 'ben',
  login() {
    console.log(this.email, 'has logged in')
  },
  logOut() {
    console.log(this.email, 'has logged out')
  },
}

console.log(userOne.login())
// ben@earth has logged in
```

// We can change property values these values can be dynamic
// We can add new methods to objects

// Creating multiple instances of the same type

## Classes In ES6 and >

```javascript
class User {
  constructor(email, name) {
    // properties
    this.email = email
    this.name = name
  }
  // methods
  login() {
    console.log(this.email + ' just logged in')
  }
}

var userOne = new User('jim@email.com', 'Jim')
var userTwo = new User('jeff@email.com', 'Jeff')

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
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

#### AJAX-(Asynchronous, JavaScript, and XML)

_AJAX is a an approach_

#### Functions

Function expression

```JavaScript
functionOne = function() {
  //some code
};

```

Function declaration

```JavaScript
function functionTwo() {
  //some code
};
```

**Null vs Undefined**

```JavaScript
let x = null;
let y = undefined;
//then
x == y
// return true;
```

Ref: Abstract equality comparison </br> https://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison

#### Callback functions

a function that is passed into another function as a parameter then invoked by another function.

#### Higher order function

a function that accepts a callback as a parameter
**EXAMPLE**

```JavaScript
function callback(){
  console.log("Coming from callback");
}

function higherOrder(fn){
  console.log("About to call callback");
  fn(); // Callback function is invoked
  console.log("Callback has been invoked");
}

higherOrder(callback);
```

**Use Cases**

- Advanced array methods
- browser Events
- AJAX requests
- React development

#### For Each function

**Simple Example**

```JavaScript
var arr = [1,2,3,4,5,6];
forEach(arr, function(number){
  console.log(number*2);
});
```

**Generalized**

```JavaScript
function forEach(array, callback){
  // To be implemented
}
// Callback signature
function callback(curElement, currentIndex, array){
  // Implemented by the caller of forEach
}
```

**EXAMPLE**

```JavaScript
var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array){
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});
```

**forEach logic EXAMPLE**

```JavaScript


function forEach(arr, callback){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}
```

#### findIndex

Returns the index of the first element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.

```JavaScript
function findIndex(array, callback){
  // findIndex code to be implemented
}

function callback(curElement, curIndex, array){
  // callback implemented by caller of function
}
```

**findIndex logic Example**

```JavaScript
function findIndex(arr, callback){
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      return i;
    }
  }
  return -1;
}
```

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

---

# Frameworks

## JavaScript Templating Frameworks

### EJS

link: http://ejs.co/

Within the server.js file the addition of `server.ser( 'view engine', 'ejs');` will set express to search ejs templates under a views/ directory.

```
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

```

#### Includes

The most basic use of an include is to call portions of html from seperate sources rather then having either all the html in one doc. Or having to repeat html code over and over in seperate instence.

```
<%- include('someEJSFile') -%>
//renders the defined ejs file
```

### Liquid

### Handlebars

## JavaScript Web Server Frameworks

### Express

### Koa

### Hapi.js

### Sails.js

## Styling and Code Quality

**To Check out**

- title: [Indomatic.js](https://github.com/rwaldron/idiomatic.js/)
- title: [Code Style Guide from HackReactor](http://prep.hackreactor.com/courses/hack-reactor-prep/lectures/1792327)

---

## Resources and Reference

Notes within this doc have been drawn from the following sources:

- source: [EJS docs](http://ejs.co/)
  - date: December 22 2017
- source: [Ecma-international](https://www.ecma-international.org/ecma-262/6.0/)
  - date: January 3 2018
