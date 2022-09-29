---
title: 'Data Structure Fundamentals'
description: 'Note and reference on data structures at a generic level'
date-created: '2022/09/28'
last-modified: '2022/09/28'
isdraft: true
categories: [ 'data-structures','fundamentals', 'basics', 'notes']
tags: ['data-structures','fundamentals', 'basics', 'notes']
type: 'note'
---

Data Structure is a collection of data that is organized for easy processing.

## characteristics of data structures 

linear
: Data that has a sequential relationship or mapping. 

non-linear
: Data that do not have a sequential relationship 
: example - c++ `int values[3];`

static
: Collection of data that is fixed in size at complilation time and cannot be resized. 
: example - static array c++ `int values[3];`

dynamic 
: Collection of data in memory that can grow or shrink in size.
: example - python list `items = [1,2,3]`

```mermaid
flowchart TD
    id1[Data Structure]--id2[linear Data Structure]
    id1--id3[Non-Linear Data Structure]
    
```