---
title: 'Promises Notes'
description: 'Notes on CORS policy and common error and solutions'
date-created: 2021/03/15 14:19:17
last-modified: 2021/09/01 19:28:23
isdraft: false
categories: ['javascript', 'general', 'notes']
tags: 
type: 'note'
---

A javascript promise either resolves when true or is rejected when false 

__Simple Promise Example__

```javascript
let p = new Promise((resolve, reject) => {
    let a = 1 + 1 
    if (a == 2){
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})

```

