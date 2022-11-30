---
title: "Dev Problems 2022"
description: "Notes and example for Dev problems"
date-created: "2021/03/15"
last-modified: "2022/08/30"
isdraft: false
categories: ["algorithms", "notes"]
tags: ["javaScript", "algorithms", "general", "notes"]
type: "note"
---

## Problems

### Problem - Closed Parens

For a given string composed of '(){}[]' it is valid if each open paren '[({` has an associated closing bracket.

**Example**

```js
// '[]'  true
// '[}]' false
// '[()]' true
```

#### Solution

```js
/**
 * @param {*} v a sting composed of '[]{}()` chars
 */
function isValid(v) {
  /**
   * time: O(n)
   * space: O(n)
   */
  const stack = []
  const sArr = v.split("")
  for (s in sArr) {
    if (sArr[s] in key) {
      stack.push(sArr[s])
    } else {
      if (stack.length < 1) {
        return false
      }
      const open = stack.pop()
      if (sArr[s] !== key[open]) {
        return false
      }
    }
  }
  return stack.length < 1
}
```

## References

[LeetCode](leetcode.com)
