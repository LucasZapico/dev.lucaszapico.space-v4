---
title: 'Frameworks'
description: 'Notes on Async Await'
date-created: '2022/02/03'
last-modified: '2022/08/24'
isdraft: false
parent: 'javascript'
categories: ['javascript', 'general', 'notes']
tags: ['javascript', 'general', 'notes']
type: 'note'
---

# Frameworks

## JavaScript Templating Frameworks

### EJS

link: http://ejs.co/

Within the server.js file the addition of `server.ser( 'view engine', 'ejs');` will set express to search ejs templates under a views/ directory.

```
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

```

#### Includes

The most basic use of an include is to call portions of html from seperate sources rather then having either all the html in one doc. Or having to repeat html code over and over in seperate instence.

```
<%- include('someEJSFile') -%>
//renders the defined ejs file
```

### Liquid

### Handlebars

## JavaScript Web Server Frameworks

### Express

### Koa

### Hapi.js

### Sails.js
