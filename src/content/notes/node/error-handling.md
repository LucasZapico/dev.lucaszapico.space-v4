---
title: 'Node Error Handling'
description: 'General notes on node error handling patterns'
date-created: '2022/05/10'
last-modified: '2022/05/11'
isdraft: true
categories: ['node', 'notes', 'code-quality']
tags: ['node', 'notes', 'reference', 'error-handling', 'patterns']
type: 'note'
---

# Node Error Handling

## HTTP Errors 

```javascript
// express app
app.get('/foo', async (req, res, next) => { 
  try {
    // do stuff 
    if(!stuff){
      const httpErr = new createError.Unauthorized(
          "stuff failed"
        );
        throw httpErr;
    }
  } catch (err){
    return next(createError(err));
  }
})
/*
* 401
* {
*	  "status": false,
*	  "message": "stuff failed"
* }
*/
```


## Reference

- [https Status cheat sheet](https://httpstatuses.io/401)
- [https error package](https://www.npmjs.com/package/http-errors)