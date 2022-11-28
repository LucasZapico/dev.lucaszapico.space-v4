---
title: 'Common String Manipulation in JavaScript'
description: 'General notes on common string manipulation cases'
date-created: '2022/09/20'
last-modified: '2022/10/03'
isdraft: false
categories: ['javascript', 'cheatsheet', 'reference', 
'string']
tags: ['javascript', 'cheatsheet', 'reference', 
'string']
type: 'note'
---

## Uppercase First Letter

### Single Word

### Solution One

```js
const a = "enterprise"
const name = `${a.slice(0, 1).toUpperCase()}${a.slice(1)}`
// Enterprise
```

**or**

```js
const a = "starship"
const strArr = a.split("")
const newStr = strArr[0].toUpperCase() + strArr.slice(1).join("")
// Startship
```

**or**

```js
const a = "mountain"
const strArr = a.split("")
const newStr = [strArr[0].toUpperCase(), ...strArr.slice(1)].join("")
// Mountain
```

### Multiple Words

```js
const capitalizeCase = (string) => {
  const cleanStr = string.replaceAll(/^[a-zA-Z0-9]*$/gi, "")
  const splitOn = new RegExp("[-_ ]", "i")
  const stg = cleanStr.split(splitOn)
  const stringArr = []
  stg.forEach((s) => {
    const t = s.split("")[0]
    if (t != null) {
      const n = [t.toUpperCase(), ...s.slice(1)].join("")
      stringArr.push(n)
    }
  })
  const result = stringArr.join(" ")

  return result
}
```

<!--
TODO: add 👇
```js

const camelCase = (string) => {
  /**
   * "theQuickBrownFoxJumpsOverTheLazyDog"
   */
}

const kebabCase = (string) => {
  /**
   * "the-quick-brown-fox-jumps-over-the-lazy-dog"
   */
}

const snakeCase = (string) => {
  /**
   * "the_quick_brown_fox_jumps_over_the_lazy_dog"
   */
}
``` -->
