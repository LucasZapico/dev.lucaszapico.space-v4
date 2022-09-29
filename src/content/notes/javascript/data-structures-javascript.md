---
title: 'Data Structures in JavaScript Notes'
description: 'Notes on data structures from a JavaScript perspective'
date-created: '2021/03/15'
last-modified: '2022/09/28'
isdraft: false
categories: ['JavaScript', 'general', 'notes', 'data-structures']
tags: ['JavaScript', 'general', 'notes', 'data-structures']
type: 'note'
---

## Overview

- Big O Notation
- Analyzing performance of arrays and data structures
- problem solving approach
- problem solving patterns
- recursion
- searching algorithms
- bubble sort
- selection sort
- insertion sort
- merge sort
- quick sort
- radix sort
- intro to data structures
- singly linked list
- doubly linked list
- stacks and quey
- binary search trees
- tree traversal
- hash tables
- graphs
- dijkstra's algorithms


## Big O Notation

Why we need Big O notation
What is Big O notation
time complexity and space complexity

For a given programing problem how do we know which solution is best?

Big O notation gives us a numaric performance bench mark for

```JavaScript
function addUpTo(n){
  let total = 0;
  for (let i = 0; i <=0; i++ ){
    total += i;
  }
  return total;
}
```

```JavaScript
function addUpTo(n){
  return n * (n + 1 ) /2
}
```

__Methods for measuring performance__

```JavaScript
function addUpTo(n){
  let total = 0;
  for (let i = 0; i <=0; i++ ){
    total += i;
  }
  return total;
}

let t1 = performance.now()
addUpTo(1000000)
let t2 = performance.now()
console.log(`Run time: ${(t2-t1)/ 1000} seconds`)
```

Manually timing is difficult to performance benchmark. Different machines and what processes are running will have performance results. For high performance algorithms the time difference may be so small that our timing measurements do not measure.

__Methods for Measuring Performance__

Counting time

Counting the number of simple operations the computer has to perform

Big O
: Formally talk about how the runtime of an algorithm grows as the input grows.
: Big O notation is a way to formalize fuzzy counting.
: We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
- $f(n)$ could be linear $(f(n) = n)$
- $f(n)$ could be quadratic $(f(n) = n^2)$
- $f(n)$ could be constant $(f(n) = 1)$
- $f(n)$ could be something entirely different



## References

[JSBen](https://jsben.ch/)

Notes from;

- [JS Algorithms and Data Structures Udemy](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11198358#overview)
