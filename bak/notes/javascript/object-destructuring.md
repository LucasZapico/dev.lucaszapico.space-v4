---
title: 'Object Destructuring'
description: 'Notes on object destructuring and the forms it can take'
date-created: 2018/03/15
last-modified: '2022/08/11'
isdraft: false
categories: ['javascript', 'notes']
tags: ['javascript', 'notes', 'reference']
type: 'note'
---

Object destructuring the method of extracting properties at

## The problem it solves

### Examples

**Without destructuring**

```javascript
const car = {
  color: 'blue',
  model: 'ford',
  make: 'mustange'
  year: '1976'
}

const color = car.color
const year = car.year
```

**With desctructuring**

```javascript
const car = {
  color: 'blue',
  model: 'ford',
  make: 'mustange'
  year: '1976'
}

const {color, model, make year} = car

console.log(color)
// blue
```

### Renaming In Destructure

```javascript
const car = {
  color: 'blue',
  model: 'ford',
  make: 'mustange'
  year: '1976'
}

const { color: c, model: mo, make: ma, year: yr} = car

console.log(mo)
// ford
```

```javascript
;(() => {
  // do stuff
})()
```

### References

[Dead simple intro to destructuring javascript](https://wesbos.com/destructuring-objects)
