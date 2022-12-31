---
title: "Express Validation Patterns"
description: ""
date-created: "2022/02/22"
last-modified: "2022/08/23"
categories: []
tags: ["validation", "express", "notes", MOC]
isdraft: false
type: "note"
---

## Express Validation

**Package Install**

```
npm i express-validator
```

**Example -inline**

_index.js_

```javascript
//...
const { validationResult, body } = require("express-validator")

//...

const app = express()

//...
//... validator example
app.post("/users", [
  body("email")
    .isLength({ min: 1 })
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("must be a valid email address"),
  body("name").isLength({ min: 1 }).withMessage("name must not be empty"),
]),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty) {
      return res.status(400).json(errors.mapped())
    }
  }
```

**Example - abstracted**

<!-- TODO: enhance validation notes -->

_index.js_

```javascript
//...
const { validationResult, body } = require("express-validator")

//...

const app = express()

const userValidation = [
  body("email")
    .isLength({ min: 1 })
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("must be a valid email address"),
  body("name").isLength({ min: 1 }).withMessage("name must not be empty"),
]

//... validation middleware
const checkForErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty) {
    return res.status(400).json(errors.mapped())
  } else {
    next()
  }
}

const simpleValiationResult = validationResult.withDefaults({
  formatter: (err) => err.msg,
})

//...
//... validator example
app.post("/users", userValidation, checkForErrors),
  async (req, res) => {
    try {
      return res.status(200).json({ message: "valid input" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }
```
