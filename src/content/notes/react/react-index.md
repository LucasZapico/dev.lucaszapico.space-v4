---
title: 'React Notes'
description: 'General notes, cheatsheet and reference for Reactjs'
date-created: 2022/01/10
last-modified: '2022/10/03'
isdraft: false
categories: ['react', 'cheatsheet','reference', 'notes']
tags: ['react', 'cheatsheet','reference', 'notes']
type: 'note'
---

## CheatSheet

## Importing and Exporting React Component Reference 

### Default Import Export 

#### Solution One 

```js:title=Components/Foo.js
const Foo = () => {
    return (<div>Foo</div>)
}

export default Foo
```
**or**

```js:title=Components/Foo.js
function Foo(){
    return (<div>Foo</div>)
}

export default Foo
```

```js:title=App.js
import Foo from './Components/Foo'
```

#### Solution Two 

```js:title=Components/Foo.js
export default Foo = () => {
    return (<div>Foo</div>)
}
```
**or**

```js:title=Components/Foo.js
export default function Foo(){
    return (<div>Foo</div>)
}
```

```js:title=App.js
import Foo from './Components/Foo'
```

----

### Named Export  

#### Single Component

##### Solution One

```js:title=Components/Foo.js
const Foo = () => {
    return (<div>Foo</div>)
}

export { Foo }
```
**or**
```js:title=Components/Foo.js
function Foo() {
    return (<div>Foo</div>)
}

export { Foo }
```

```js:title=App.js
import {Foo} from './Components/Foo'
```

##### Option Two

```js:title=Components/Foo.js
export const Foo = () => {
    return (<div>Foo</div>)
}
```
**or**
```js:title=Components/Foo.js
export function Foo(){
    return (<div>Foo</div>)
}
```

```js:title=App.js
import {Foo} from './Components/Foo'
```

#### Export/Import Multiple Components From Single File


```js:title=Components/Elements.js
const Foo = () => {
    return (<div>Foo</div>)
}

const Bar = () => {
    return (<div>Bar</div>)
}

export { Foo, Bar }
```
**or**
```js:title=Components/Elements.js
function Foo() {
    return (<div>Foo</div>)
}

function Bar() {
    return (<div>Foo</div>)
}

export { Foo, Bar }
```

```js:title=App.js
import { Foo, Bar } from './Components/Elements'
```

##### Option Two

```js:title=Components/Elements.js
export const Foo = () => {
    return (<div>Foo</div>)
}

export const Bar = () => {
    return (<div>Foo</div>)
}
```
**or**
```js:title=Components/Foo.js
export function Foo(){
    return (<div>Foo</div>)
}

export function Bar(){
    return (<div>Bar</div>)
}
```



```js:title=App.js
import { Foo, Bar } from './Components/Elements'
```

### Keeping Apps Organized By Using A Component Staging File

Using a component staging file can make managment of apps with many components simpler.

**Benefits of a component staging file**

1. If we refactor a components file name **or** path we only need to change the path name in a single file
2. Reduces the number of import statements 

#### Handling Default Exports in Staging File 

**Simple Example**

```js:title=Components/Atoms/Foo.js
export default Foo = () => {
    return (<div>Foo</div>)
}
```

```js:title=Components/index.js
export { default as Foo } from './Atoms/Foo'
```

```js:title=App.js
import {Foo} from './Components'
```

**Exmaple - One** 

```js:title=Components/Atoms/Foo.js
export default Foo = () => {
    return (<div>Foo</div>)
}
```

```js:title=Components/Atoms/Bar.js
export default Bar = () => {
    return (<div>Bar</div>)
}
```


```js:title=Components/Atoms/Elements.js
export const ElemntOne = () => {
    return (<div>ElementOne</div>)
}

export const ElemntTwo = () => {
    return (<div>ElementOne</div>)
}

```

```js:title=Components/index.js
export { default as Foo } from './Atoms/Foo'

export { ElemntOne, ElementTwo } from './Elements'
```

```js:title=App.js
import {
    Foo, 
    Bar, 
    ElemntOne, 
    ElementTwo 
} from './Components'
```