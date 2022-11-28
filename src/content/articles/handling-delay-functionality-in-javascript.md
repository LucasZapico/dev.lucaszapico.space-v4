---
title: "Handling Delay Functionality in Loops in JavaScript - A Dev Entry TL:DR"
description: "A dev log expanding on discoverying the solution for implmenting delays in loops"
date-created: "2022/10/11"
last-modified: "2022/10/11"
isdraft: true
categories: ["javascript", "gotcha", "journal"]
tags: ["javascript", "gotcha", "journal"]
type: "note"
---

- what is the cause of the unexpected functionality
-

## TL:DR - One

The other day I was trying to build an algorithm visualizer and one of the features I felt would be value adding was the ability to throttle up or down the algorithm I was visualizing. The \*obvious solution to this is to slow the iterator(loop) that all algorithms utilize in some copasity.

Natrually I attempted something to the effect of 👇

```js
const range = [0, 1, 2, 3]
for (r of range) {
  setTimeout(() => {
    // stuff
    console.log(r)
  }, 3000)
}
/**
 * output
 * 3
 * 3
 * 3
 * 3
 */
```

The results of which were not what I was expecting. 🤔

So here begins the rabbit hole of discovery for how `setTimeout` behaves in iterators.

### Exploration of Behavior in Common Interators(loops)

#### For Loop Variations

**No good**

```js
// does not produce the desired results 👎
const range = [0, 1, 2, 3]
for (let r = 0; r < range.length; r++) {
  setTimeout(() => {
    console.log(r)
  }, 2000)
}
/**
 * Result:
 * Delay of 2 seconds then log
 * 0
 * 1
 * 2
 * 3
 */
```

### Soultion One

```js
// produced the desired result 👍
function foo() {
  const range = [0, 1, 2, 3]
  for (let r = 0; r < range.length; r++) {
    delay(r)
  }
}

function delay(i) {
  let value = i
  setTimeout(() => {
    console.log(value)
  }, i * 3000)
}

/**
 * 0 -> 3 second delay
 * 1 -> 3 second delay
 * 2 -> 3 second delay
 * 3 -> 3 second delay
 */
```

### TL:DR - Entry Two

Adding an update to this challenge. I thought I had this solved with the solution above but I ran into another issue when implementing the delay into the algorithm visualizer. In my use case needed to update the UI as the algorithm executes but with the pattern I had come up with was rigid and hacky (lazy explanation). Ideally, as I add visualizations delay function could be reused agnostic of the algorithm.

```js
// rigit solution 👇
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const linearSearch = (range, target) => {
  const match = (iterator) => {
    if (iterator === target) {
      console.log(iterator === target)
      return [true, target]
    } else if (iterator === range.length) {
      return [false, "target missing in range"]
    }
  }
  const delay = (func, iterator, period) => {
    setTimeout(() => {
      func(iterator)
    }, period)
  }
  for (let i = 0; i < range.length; i++) {
    delay(match, i, 2000)
  }
}

linearSearch(range, 5)
```

The solution I was driving toward was having the different search algorithms, take in a range, target, and delay and for earch iteration the results can be used to update the UI accordingly.

The features I wanted to satisfy were the following.

- return the target value when reached
- return the search set of the algorithm in such a way that it can be visualized in the ui
- leverage an agnostic delay function

> 👾 I don't know about anyone else but this is development for me in a nut shell. Down the 🐇 rabbit hole for a seemingly simple objective.

**Enter Agnostic timeout solution**

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const foo = async () => {
  await timeout(3000)
  return true
}

foo()
```

**Exmaple with logging check**

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const foo = async () => {
  let now = Date.now()
  console.log("start")
  await timeout(3000)
  let newNow = Date.now()
  const timeDiff = Math.floor((newNow - now) / 1000)
  console.log(`delay since function start: ${timeDiff}`)
  console.log("end")

  return true
}

foo()
```

### The Results Using Our Delay Function In Search Algorithm

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

async function linearSearchAlgo(range, target) {
  let now = Date.now()
  for (let r = 0; r < range.length; r++) {
    const delay = await timeout(2000)
    if (delay) {
      let newNow = Date.now()
      console.log(Math.floor((newNow - now) / 1000))
      now = newNow
      console.log(r === target)
      if (r === target) {
        return true
      } else if (r === range.length - 1) {
        return "target not in range"
      }
    }
  }
}

const main = () => {
  linearSearchAlgo(range, 3)
}

main()
```
