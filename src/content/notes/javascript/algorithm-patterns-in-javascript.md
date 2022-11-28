---
title: "Algorithm Patterns in JavaScript"
description: "Notes on Algorithm patterns using JS"
date-created: 2021/03/15
last-modified: "2022/10/02"
isdraft: false
categories: ["javaScript", "algorithms", "notes"]
tags: ["javaScript", "algorithms", "general", "notes"]
type: "note"
---

## Frequency Counter Pattern

### Problem - Same Square

Write a function **Same**, which takes two arrays. The function should return `true` if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.

**Native Solution**

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i<arr1.length; i++>){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}
```

**Refactored**

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (val of arr1) {
    frequencyCounter1[val] = frequencyCounter1[val] || 0 || +1
  }
  for (val of arr2) {
    frequencyCounter2[val] = frequencyCounter2[val] || 0 || +1
  }
  for (key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}
```

### Problem - Anagram

**Native Solution**

```js
function isAnagram(a) {
  const [str1, str2] = a
  if (str1.length != str2.length) {
    return false
  }
  if (str1.length < 1 && str2.length < 1) {
    return true
  }
  let str2Arr = str2.split("")
  for (s of str1) {
    const p = str2Arr.indexOf(s)

    if (p > -1) {
      const j = str2Arr.splice(p, 1)

      if (str2Arr.length < 1) {
        return true
      }
    }
  }
  return false
}
```

### Multiple Pointer Patterns

The pattern uses pointers or values that correspond to and index or position and move toward the beginning, end or middle based on a certain condition.

> ✨ Efficient for solving problems with minimal space complexity.

This pattern can be used on the following data structures;

- array
- string
- linked list
- doubly linked list

pointer
: a variable that is associated(points) to a single element in our data structure

In this pattern we use two pointers that work through the data structure.

<!-- TODO: add example of pointer behavior -->

## Stacks

### Examples

- browsers back button
- stack of books

Stack functions: push, pop, peek, length

In javaScript these methods are built into the array method

#### Stack Example - is palidrome

```javascript
ar letters = []; // this is a stack

var word = "racecar"

var rwrod = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
  rword += letters.pop();
}

if (rword === word ){
  console.log(word + " is a palidrome.")
}  else {
  console.log(word + " is not a palindrome")
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

setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
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
  let result = ""
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i]
  }
  return result
}

let txt = "extra"
console.log(reverseString(txt))
```

**ES6**
Using the **for...of** avaiable in ES6.

```javascript
function reverseString(text) {
  let results = ""

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
  if (text === "") {
    return ""
  } else {
    return reverseString(text.substr(1)) + text[0]
  }
}

let txt = "extra"
console.log(reverseString(txt))
```

## References

[The Untimate Guide to JavaScript Algorithms](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/string-reversal)
