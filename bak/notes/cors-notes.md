---
title: CORS Notes
description: Notes on CORS policy and common error and solutions
date-created: '2021/03/15 14:19:17'
last-modified: 2022/01/29 09:28:45
isdraft: false
categories:
  - web-standards
  - notes
tags:
  - CORS
type: note
---

## CORS (Cross origin policy)

### Same Origin Policy

In early web development it was assumed that a website was only going to receive ajax request from the same server that the site was severed from.

Origin
: protocol domain url
: https://example.com

**Modern Web**

In the modern web a website makes calls to many different servers for all sorts of resources. For example fonts, styling, images, and api data to name a few. These are cross origin calls.

The solution to enable cross origin requests in a more efficient way was **http headers**. For example a public server would add a CORS related header to the response and the client would determine if the response from the server was safe.

```
Access-Control-Allow-Origin: 'http://example.com'
```

```mermaid


```
