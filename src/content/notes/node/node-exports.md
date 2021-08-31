---
title: 'Exports in Node'
description: 'Note and example for modularizing express api'
date-created: 2021/08/26
last-modified: 2021/08/28 10:27:10
isdraft: true
categories: ['api', 'express', 'node', 'structure']
tags: [""]
type: 'note'
---

### Multiple exports from single file 

#### Example 

```javascript
exports.log = console.log;
exports.logSp = log(
  chalk.redBright(`
====================================================
`)
);

```

#### Example 

```javascript
exports.getContacts = async (req, res) => {
  try {
    const contacts = await axios.get(`<URL>`)
    res.status(400).json({
       contacts
    })
  } catch(err) {
    console.error(err)
    res.status(400).json({
      message: 'erorr'
    })
  }
  
}

```