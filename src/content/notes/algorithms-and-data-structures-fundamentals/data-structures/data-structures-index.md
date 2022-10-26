---
title: 'Data Structures Fundamentals'
description: 'Notes for reference on data structure fundamentals'
date-created: '2022/10/18'
last-modified: '2022/10/19'
isdraft: false
categories: ['data-structure','fundamentals', 'notes']
tags: ['data-structure','fundamentals', 'notes']
type: 'note'
---

## TL:DR 

In my opinion one of the first clarifications necessary to not get turned around when learning data structures is the distinction between the **definition**  vs the **implementation** of a data structure. 

One of the many reasons this is important is if you are trying to learn data structure often the article, course, etc, will lead with an example in one language or another.If you're doing your due diligence you should have at least a few sources open for cross reference. It can be quite confusing to see three or four stack examples in JS all with different implementations for a "fundamental" subject. 

One of the reasons for variation is because as long as the abstract definition is met the implementation does not matter. This becomes particularly confusing when the language used in a courses example is a sufficient data structure for say a `stack`. This is when one definition is contained within another. For example an array in JavaScript can be used as a stack but is sufficient definition. When trying to understand fundamentals this ambiguity that is trivial once understood can initially cause frustration.

> The main take away is to make a distinction between the abstract concept of a data structure vs and implementation which just has to meet the definition and in many languages the build in data structures are sufficient definitions for fundamental pure definitions.

## Stack 

A stack is an abstract computer science data type defined as a collection of elements. 


- [Stack implementation in JavaScript](/notes/data-structures-in-javascript)


### Operations 

**Basic Operations**

At the the most basic level it has two operations; 

push
: add an element to the collection  

pop
: removes an element from the collection 

**Addition Operations**

These operations are often referred to as non essential, as strictly speaking they are not integral to the definition of a stack. 


peek
: return the value of the last element added to the stack 

size
: returns the number of elements in the stack

## Catch 

- more abstractly a sequential collection 
- linear data structure
- push and pop opperation occur only at one end of the structure, the "top" of the stack 

- a stack can be implemented as the "singly linked list"
- stack can be implemented to have bounded capacity 

[Stack abstract data type - wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))