---
title: 'JavaScript Notes'
description: ''
date-created: 2021/03/15
last-modified: 2021/09/01
isdraft: false
categories: ['JavaScript', 'general', 'notes']
tags: ['JavaScript', 'general', 'notes']
type: 'note'
---

# JavaScript Catch

- [[fundamentals]]
- [[promises]]
- [[javaScript-objects-and-classes]]
- [[Asynchronous Code]]
- [[async-await]]
- [[promises]]
- [[]]

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

---

[[Frameworks]]

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
