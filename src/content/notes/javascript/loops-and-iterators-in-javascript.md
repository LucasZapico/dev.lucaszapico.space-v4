---
title: "Loops and Interators in JavaScript"
description: "General note catch loops and interators in JavaScript"
date-created: "2022/10/06"
last-modified: "2022/10/06"
isdraft: false
categories: ["javascript", "general", "notes", "reference", "loops", "basics"]
tags: ["basics", "javascript", "general", "notes", "reference", "loops"]
type: "note"
---

<!--
- for
- while

 -->

## Basic Concept of a Loop

<!-- add mermaid flowchart here -->

```js
for (initialExpression; condition; updateExpression) {
  // for loop body: statement
}
```

## For Loops

### for

```js
for (let j = 0; j < 5; j++) {
  console.log(j)
}
/**
 * 0
 * 1
 * 2
 * 3
 */
```

#### for loop syntax variations

I was debating adding the following variations for two reasons, primarily because I haven't seen them used often. Tow, they fall into the bucket of short hand which I heavely shy away from in development.

```js
/**
 *
 */
for (let i = 0; i < 5; ) {
  console.log(i)
  i++
}

/**
 *
 */
for (let k = 0; ; ) {
  if (k > 3) break
  console.log(k)
  k++
}

/**
 *
 */
for (let h = 0; ; h++) {
  if (h > 3) break
  console.log(h)
}

/**
 *
 */
let a = 0
for (; a < 5; a++) {
  console.log(a)
}

/**
 *
 */
let b = 0
for (; ; b++) {
  if (b > 3) break
  console.log(b)
}

/**
 *
 */
let l = 0
for (; l < 3; ) {
  console.log(l)
  l++
}

/**
 *
 */
let t = 0
for (; ; t++) {
  if (t > 3) break
  console.log(t)
}

/**
 *
 */
let j = 0
for (;;) {
  if (j > 3) break
  console.log(j)
  j++
}
```

### for..in

> 💡 Do not use for in over an Array if the index order is important.
> It is better to use a for loop, a for of loop, or Array.forEach() when the order is important. - W3school

```js
const object = { a: 1, b: 2, c: 3 }
for (o in obj) {
  console.log(o)
  console.log(object[o])
}
/**
 * a,
 * 1,
 * b,
 * 2,
 * c,
 * 3
 **/
```

```js
const arr = [1, 2, 3, 4]
for (i in arr) {
  console.log(i)
}

/**
 * 0,
 * 1,
 * 2,
 * 3,
 */
```

```js
for (i in arr) {
  console.log(arr[i])
}

/**
 * a,
 * b,
 * c,
 * d,
 */
```

### for..of

```js
for (a of arr) {
  console.log(a)
}

/**
 * a,
 * b,
 * c,
 * d
 */
```

### While

```js
let a = 0
while (a < 5) {
  console.log(a)
  a++
}
/**
 * 0,
 * 1,
 * 2,
 * 3,
 * 4
 */
```
