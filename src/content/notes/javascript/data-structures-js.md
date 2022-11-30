---
title: "Data Structures through JS"
description: "Examine common data structures through JS"
date-created: "2021/03/15"
last-modified: "2022/09/05"
isdraft: false
categories: ["JavaScript", "general", "notes", "data-structures"]
tags: ["JavaScript", "general", "notes", "data-structures"]
type: "note"
---

## Stack and Que

### Definition of Stack

A collection of data that operates under LIFO principles.

- LIFO: first in first out

#### Real World Cases

- managing function invocations
- undo/redo
- routing, history objects in browsers

A stack at it’s core is an abstract concept and there is some fluidity with the properties of the definition. Different languages have varying degrees of rigor and patterns `with how function is implemented.

JavaScript doesn't have a default stack data type but the array object using `.push()` and `.pop()` is functionality a stack.

> 💡 From a performance standpoint a JS array is not the most lean implementations of a stack as functionality associated with index's is not necessary within the rigorous definition of a stack.

#### Object Definition

```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  insert() {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let tmp = this.first
      this.first = newNode
      this.first.next = tmp
    }
    return ++this.size
  }
  remove() {
    if (!this.first) {
      return null
    }
    let tmp = this.first
    if ((this.first = this.last)) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return tmp.value
  }
}
```

#### Functional Definition

```js
const node = (value) => {
  return {
    Node: value,
    next: null,
  }
}
const stack = (size, insert, remove) => {}
```

#### Stack data structure built with linked lists

```js

```

### Queu

- FIFO
