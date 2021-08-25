---
title: 'Dom Scroll Notes'
description: 'Notes on the various ways of measuring scroll position in the dom'
date-created: 2021/03/15 14:19:17
last-modified: 2021/04/15 11:24:35
isdraft: false
categories: ['web', 'notes']
tags: ['scroll']
type: 'post'
---

## Measuring Scroll

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
