---
title: 'React Hooks Review and Notes'
description: ''
date-created: 2021/04/04 11:18:38
last-modified: 2021/09/01 19:48:20
isdraft: false
categories: ['react', 'notes']
tags: ['react', 'notes', 'hooks']
type: 'note'
---

## `useState()`

- hook are only used in function componenets
- hooks run in the same order
- hooks cannot be nest or run in conditionals

**Counter Example**

```js
// .....
const App = () => {
  const [count, setCount] = useState()
  const decrementCount = () => {
    setCount((prev) => prev - 1)
  }
  const incrementCount = () => {
    setCount((prev) => prev + 1)
  }
}
//....
```

## `useMemo()`

- when we update state in react we re-render our whole component
- `useMemo()` is meant to help performance on big functions
- we don't memwize everything because there is an overhead to use
- use memo when we have heavy functions that

```js
//....
const App => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const themeStyles = {
    backgroundColor: dark ? 'black', 'white',
    color: dark ? 'white', 'black'
  }

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])
}
//....
```

In this example each time we change the number our component will re-render re making `themeStyles` in memory and because of this we will see "theme changed" logged to our console.
