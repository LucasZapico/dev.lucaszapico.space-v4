---
title: 'Functional Programming Paradigm'
description: 'Notes on Functional Programming'
date-created: '2022/09/05'
last-modified: '2022/09/06'
isdraft: false
categories: ['JavaScript', 'general', 'notes', 'functional-programing']
tags: ['JavaScript', 'general', 'notes', 'functional-programing', 'WIP']
type: 'note'
---


## Basics of Functional Programming

- immutable data structures
- first class functions
  ---
- frameworks like React and Angular have improved performance by using immutable data structures. 

Writing real world code with solely pure functions is impractical if not impossible. Therefore, the goals is to aim for 80/20 rule having 80% pure function for a given project.


### What functional programming isn't 


### Pure Functions 

**Definition** 

**Referential transparency**
: The function always gives the same return value for the same argument. 
: The function cannot depend on mutable state

**Side-effect free**
: The function cannot cause side effects. 
: Side effects may include I/O (console or lgging), modifying a mutable object, reassigning a variable

#### Examples 

```js
function multiply(a, b){
    return a * b
}
```

#### Benefits of Pure Functions 

- easier to debug because they don't depend on mutable state
- return value can be cached which reduces recomputing 
- easier to test because there are on dependencies that need to be mocked

> 🗒️ if a function has no return value, then it's a no-op or it causing a side effect. Similarly, if a function is called but its return value is not used it's probably functionally handling a side effect and is therefore impure. 

#### Example - Can Ride 

**Impure Function**

```js
let heightRequirement = 46 

function canRide(height) {
  return height >= heightRequirement;
}

// Every half second, set heightRequirement to a random number between 0 and 200.
setInterval(() => heightRequirement = Math.floor(Math.random() * 201), 500);

const mySonsHeight = 47;

// Every half second, check if my son can ride.
// Sometimes it will be true and sometimes it will be false.
setInterval(() => console.log(canRide(mySonsHeight)), 500);
```

**Rewrite as Pure**

```js
const heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}
```

### Functional Programing Array Methods

```js
'use strict'

const arr = Object.freeze([4,5,6])

// push()
const arrB = arr.concat(7,8,9)
// or 
// const arrB = [...arr, 7,8,9]

// pop() 
const arrC = arr.slice(0, -1)

// unshift(1,2,3)
const arrD = [1,2,3].concat(arr)

// shift()
const arrE = arr.slice(1)

// sort()
const arrF = R.sort(compareFunction, arr) // R = Ramda

// reverse()
const arrG = R.reverse(arr) // R = Ramda

// copyWithin()

// fill()

// splice()

```