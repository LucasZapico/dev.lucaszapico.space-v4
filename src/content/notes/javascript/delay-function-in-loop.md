---
title: 'Setting a Delay in Loops in JavaScript'
description: 'Reference for JavaScript "⚠️ gocha" trying to delay function in loop'
date-created: '2022/10/04'
last-modified: '2022/10/04'
isdraft: true
categories: ['javaScript', 'gacha', 'notes', 'reference']
tags: ['javaScript',  'gacha', 'notes', 'reference']
type: 'note'
---

## The Chanllenge (Gacha)

### TL:DR 

The other day I was trying to build an algorithm visualizer and one of the features I felt would be value adding was the ability to throttle up or down the algorithm I was visualizing. The obvious solution to this is to slow the iterator(loop) that all algorithms utilize in some copasity. 

Natrually I attempted something to the effect of 👇

```js
const range = [0,1,2,3] 
for (r of range){
    setTimeout(() => {
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

```js 
const range = [0,1,2,3]
for(let r = 0; r < range.length; r++){
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
function foo() {
  const range = [0,1,2,3] 
  for (let r = 0; r < range.length; r++) {
    delay(r);
  }
}

function delay(i) {
  let value = i;
  setTimeout(() => {
    console.log(value);
  }, i * 3000);
}


/**
* 0 -> 3 second delay
* 1 -> 3 second delay
* 2 -> 3 second delay
* 3 -> 3 second delay
*/
```