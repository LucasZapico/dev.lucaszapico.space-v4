---
title: 'format number as currency string'
description: ''
date-created: 2018/03/15 14:19:17
last-modified: 2021/09/01 19:44:50
isdraft: false
categories: ['javascript', 'notes']
tags: ['javascript', 'notes', 'reference']
type: 'note'
---

### Examples

```javascript
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

formatter.format(1000) // "$1,000.00"
formatter.format(10) // "$10.00"
formatter.format(123233000) // "$123,233,000.00"
```

### References

[How to format a number as a currency value in JavaScript](https://flaviocopes.com/how-to-format-number-as-currency-javascript/)
