---
title: 'CSS'
description: ''
date-created: 2017/03/15 14:19:17
last-modified: 2021/09/01 19:26:00
isdraft: false
categories: ['css', 'notes']
tags: []
type: 'note'
---

# CSS NOTES

## _Description_

This document is meant as a running catch for notes pertaining to css.</br> The goal is to;

1. take notes and thereby reinforce concepts
2. by composing custom notes, develop a reference framework which maps onto my mental framework since I am the one composing it.

---

## Table of Contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->
<!-- code_chunk_output -->

- [CSS NOTES](#css-notes)
  - [_Description_](#description)
  - [Table of Contents](#table-of-contents)
    - [Box Model](#box-model)
  - [Accessibility Best Practices](#accessibility-best-practices)
  - [Quick Reference](#quick-reference)
    - [Images](#images)
  - [RESOURCES](#resources)
    - [REFERENCES](#references)
    - [DEFINITIONS](#definitions)
  - [LOG](#log)
  - [TODO](#todo)

<!-- /code_chunk_output -->

### Box Model

Def : The box model refers to the physical properties of an element's rectangular box.

- margins
- borders
- padding
- content width
- content height
  (lynda.com, CSS: Page Layout)

## Accessibility Best Practices

2018

**SASS**
\*Some browsers do not support em's, therefore it is a good practice to use some sort of mixen to convert em's to px"

```css
// Rem output with px fallback
@mixin font-size($sizeValue: 1) {
  font-size: ($sizeValue * 16) * 1px;
  font-size: $sizeValue * 1rem;
}
```

## Quick Reference

### Images

**object-fit**

```css
 {
  object-fit: fill;
  object-fit: contain;
  object-fit: cover;
  object-fit: none;
  object-fit: scale-down;
}
```

---

## RESOURCES

### REFERENCES

[CSS: Page Layout, lynda.com](https://www.lynda.com/Web-Interactive-CSS-training/CSS-Page-Layouts/86003-2.html)

### DEFINITIONS

---

## LOG

2018-06-12
Quick reference started

- images

---

## TODO

- []
