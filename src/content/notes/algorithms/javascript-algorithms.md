---
title: 'JavaScript Algorithms'
description: 'Notes on CORS policy and common error and solutions'
date-created: 2021/03/15 14:19:17
last-modified: 2021/09/01 19:41:23
isdraft: false
categories: ['javascript', 'algorithms', 'note']
tags: ['CORS']
type: 'note'
---

## Stacks

### Examples

- browsers back button
- stack of books

Stack functions: push, pop, peek, length

In javaScript these methods are built into the array method

##### Stack Example - is palidrome

```javascript
var letters = [] // this is a stack

var word = 'racecar'

var rwrod = ''

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if (rword === word) {
  console.log(word + ' is a palidrome.')
} else {
  console.log(word + ' is not a palindrome')
}
```

#### Stack example

Stack methods and behaviors in vanilla javascript

```javascript
/* stacks */

// functions: push, pop, peek, length

var Stack = function () {
  this.count = 0
  this.storage = {}

  // Adds a value onto the endo of the stack
  this.push = function (value) {
    this.storage[this.count] = value
    this.count++
  }

  // Removew and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined
    }

    this.count--
    var result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.size = function () {
    return this.count
  }

  this.peek = function () {
    return this.storage[this.count - 1]
  }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)

console.log(myStack.peek())
console.log(myStack.pop())
```

### Set data structure

Sets are simliar to arrays ecept there are no douplicate elements.

```javascript
function mySet() {
  // the var collection with hold the set
  var collection = []

  // this method will check for the presnece of an element and return true of false
  this.has = function (element) {
    return collection.indexOf(element) !== -1
  }

  //this method will return all the values in the set
  this.values = function () {
    return collection
  }

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  // this method will return the size of the collection
  this.size = function () {
    return colletion.length
  }

  // this method will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet()
    var firstSet = this.values()
    var secondSet = otherSet.values()
    fistSet.forEach(function (e) {
      unionSet.add(e)
    })
    secondSet.forEach(function (e) {
      unionSet.add(e)
    })
    return unionSet
  }

  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values()
    return firstSet.every(function (values) {
      return otherSet.has(values)
    })
  }
}

var setA = new mySet()
var setB = new mySet()

setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')
console.log(setA.values())
console.log(setB.values())
console.log(setA.subset(setB))

var aSet = new mySet()
```

## Example Problems

### String Reversal

- chaining Methods (build in)
-

#### Method Chaining

```javascript
function reverseString(text) {
    return text.split("").reverse().join("")
}

// ES6
function reverseString(text) {
    return [...text].reverse().join('')
}

let txt = "Some String";
console.log(reverseString(txt)

```

#### The For Loop Way

```javascript
function reverseString(text) {
  let result = ''
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i]
  }
  return result
}

let txt = 'extra'
console.log(reverseString(txt))
```

**ES6**
Using the **for...of** avaiable in ES6.

```javascript
function reverseString(text) {
  let results = ''

  for (let char of text) {
    result = char + result
  }
  return result
}
```

### Recursive Way

This is a pattern using what is called **termianl case**. Without a terminal value the recursion would continue indefinitely.

```javascript
function reverseString(text) {
  if (text === '') {
    return ''
  } else {
    return reverseString(text.substr(1)) + text[0]
  }
}

let txt = 'extra'
console.log(reverseString(txt))
```

## RESOURECES

### REFERENCES

[The Untimate Guide to JavaScript Algorithms](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/string-reversal)
