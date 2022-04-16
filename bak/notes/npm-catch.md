---
last-modified: 2022/01/29 09:30:37
---

**& vs &&**

### `&&`

**Example**

```json
"scriptOne": "script 1",
"scriptTwo": "script 2"
"One:Two": "script 1 && script 2"
```

With `&&` script 1 will run and if it does not error script 2 will run

### `&`

**Example**

```json
"scriptOne": "script 1",
"scriptTwo": "script 2"
"One:Two": "script 1 & scrpit 2"
```

With `&` script 1 in parallel to script 2
