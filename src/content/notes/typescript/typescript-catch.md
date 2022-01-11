---
title: Typescript Notes
description: General notes on typescript
date-created: 2022/01/10
last-modified: 2022/01/10 12:16:55
isdraft: true
categories:
  - typescript
  - notes
tags: []
type: note
---

## What is Typescript 

Typescript is a superset of Javascript that gets compiled down to JavaScript. 

Typescript delivers new features or simpler features to what would be more complete JavaScripts. 

Out of the box, TypeScript uses types that for extra error checking. 

### Why use TypeScript 


__Example__

The following is an example of an addition function, but because of the native behavior of JavaScript this can result in a logical error in our code. Because of how JavaScript handles the `+` operater a string is pass to our addition function it will concat said strings. Which, in this case is not the desired function. The reason this is an issue is because no error will be thrown. 

```javascript
function add(num1, num2){
  return num1 + num2;
}

console.log(add('2', '3'))
// 23
```

__Javascript Based Solution__

To handle this error in native JS we would either need to check for type with an if statement and then sanitize our input to get the desired response. 

```javascript
function add(num1, num2){
  // check types
  if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
  
}

console.log(add('2', '3'))
// 5
```

### Using Typescript 

To use Typescript we need to install a Typescript compiler. 

```shell
brew install typescript
```

__check install__ 

```shell
which tsc
```

__Simple Example__

```typescript 
 function add(num1: number, num2: number) {
   return num1 + num2
 }

const n1 = "2"
const n2 = "4"

 console.log(add(+n1, +n2))
```

## Core Types

|         |                     |                                                            |
|---------|---------------------|------------------------------------------------------------|
| number  | 1, 5.3, -10         | All numbers, no differentiation between integers or floats |
| string  | "Hi", 'hi', ``hey`` | all text values                                            |
| boolean | true, false         | just two, no "truthy" or "falsy" values                    |
| object  | `{age: 30}`         | Any javaScript object, more specific types                 |
| Array   | `[1,2,3]`           | Any javaScript array, types can be flexible or strict      |
| Tuple | `[1,2]` | fixed length and fixed type array|
| Enum | enum {NEW, OLD} | Added by TypeScript: automatically enumerated global constant identifiers |

## TypeScript Objects

### Objects

__Simple Example__

```typescript 
const person: object = {
  name: 'max',
  age: 30
}
```

__Specialize Object__

```typescript 
const person: {} = {
  name: 'max',
  age: 30
}
```

__Explicit Object Typing__

```typescript 
const person: {
  name: string;
  age: number
} = {
  name: 'max',
  age: 30
}
```

#### Arrays 

```typescript
const hobbies: string[] = ['Sports', 'Cooking']
```

```typescript 
for (const hobby of hobbies){
  console.log(hobby.toUpperCase())
}
```

#### Tuples [Docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#other-important-typescript-types)


```typescript 
const roles: [number, string] = [2, 'author']
```

*what tuples enforces* 

```typescript 
const roles: [number, string] = [2, 'author']
// Type 'number' is not assignable to type 'string'
roles[1]= 10
```
```typescript 
let roles: [number, string] = [2, 'author']
// Type '[number, string, string]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.
roles = [2, 'author', 'producer']
```


__Exceptions__

Typescript tuples does not enforce push errors

```typescript 
const roles: [number, string] = [2, 'author']
roles.push('admin')
// (3) [2, 'author', 'admin']
```
