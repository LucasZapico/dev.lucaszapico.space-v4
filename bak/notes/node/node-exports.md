---
title: Exports in Node
description: Note and example for modularizing express api
date-created: 2021/08/26
last-modified: 2022/01/29 09:21:30
isdraft: true
<<<<<<< HEAD:bak/notes/node/node-exports.md
categories:
  - api
  - express
  - node
  - structure
tags:
  - null
type: note
=======
categories: ['node', 'structure']
tags: ['api', 'express','reference']
type: 'note'
>>>>>>> 17d7e9df15633500cbf6996ad5dedd40c6e09354:src/content/notes/node/node-exports.md
---

### Multiple exports from single file

#### Example

```javascript
exports.log = console.log
exports.logSp = log(
  chalk.redBright(`
====================================================
`)
)
```

#### Example

```javascript
exports.getContacts = async (req, res) => {
  try {
    const contacts = await axios.get(`<URL>`)
    res.status(400).json({
      contacts,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      message: 'erorr',
    })
  }
}
```

```javascript
const foo = () => {}

module.exports = foo
```

```javascript
const foo = () => {}

const bar = () => {}

module.exports = { foo, bar }
```
