---
title: "JavaScript Objects and Classes"
description: "javascript objects and classes notes and examples"
date-created: 2021/03/15
last-modified: "2022/08/24"
isdraft: false
parent: "javascript"
categories: ["JavaScript", "general", "notes"]
tags: ["JavaScript", "general", "notes", "fundementals"]
type: "note"
---

## JavaScript Objects

objects have methods and properties.

```javascript
let names = ["lucas", "luc", "James", "Rafael"]

// lenght method
console.log(name.length)
// 4
```

### Primitives

Primitive do not have methods. But, javascript is intuitive. This means that JavaScript wraps primitives in objects which enables methods. Thus, making a given primitive to behave like an object.

- booleans
- strings
- numbers

## First Object

#### Encapsulation

```javascript
let userOne = {
  email: "ben@earth.com",
  name: "ben",
}

// ^ this is called encapulation

console.log(userOne.name)
```

```javascript
let userOne = {
  email: "ben@earth.com",
  name: "ben",
  login() {
    console.log(this.email, "has logged in")
  },
  logOut() {
    console.log(this.email, "has logged out")
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
    console.log(this.email + " just logged in")
  }
}

var userOne = new User("jim@email.com", "Jim")
var userTwo = new User("jeff@email.com", "Jeff")

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
```
