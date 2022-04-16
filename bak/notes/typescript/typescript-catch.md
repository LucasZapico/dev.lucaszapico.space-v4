---
title: Typescript Notes
description: General notes on typescript
date-created: 2022/01/10
last-modified: 2022/01/29 09:26:58
isdraft: false
categories:
  - typescript
  - notes
tags:
  - null
type: note
---

## What is Typescript

Typescript is a superset of Javascript that gets compiled down to JavaScript.

Typescript delivers new features or simpler features to what would be more complete JavaScripts.

Out of the box, TypeScript uses types that for extra error checking.

### Why use TypeScript

**Example**

The following is an example of an addition function, but because of the native behavior of JavaScript this can result in a logical error in our code. Because of how JavaScript handles the `+` operater a string is pass to our addition function it will concat said strings. Which, in this case is not the desired function. The reason this is an issue is because no error will be thrown.

```javascript
function add(num1, num2) {
  return num1 + num2
}

console.log(add('2', '3'))
// 23
```

**Javascript Based Solution**

To handle this error in native JS we would either need to check for type with an if statement and then sanitize our input to get the desired response.

```javascript
function add(num1, num2) {
  // check types
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return +num1 + +num2
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

**check install**

```shell
which tsc
```

**Simple Example**

```typescript
function add(num1: number, num2: number) {
  return num1 + num2
}

const n1 = '2'
const n2 = '4'

console.log(add(+n1, +n2))
```

## Core Types

|         |                   |                                                                           |
| ------- | ----------------- | ------------------------------------------------------------------------- |
| number  | 1, 5.3, -10       | All numbers, no differentiation between integers or floats                |
| string  | "Hi", 'hi', `hey` | all text values                                                           |
| boolean | true, false       | just two, no "truthy" or "falsy" values                                   |
| object  | `{age: 30}`       | Any javaScript object, more specific types                                |
| Array   | `[1,2,3]`         | Any javaScript array, types can be flexible or strict                     |
| Tuple   | `[1,2]`           | fixed length and fixed type array                                         |
| Enum    | enum {NEW, OLD}   | Added by TypeScript: automatically enumerated global constant identifiers |
| Any     | \*                | Any type, no assignment                                                   |

## TypeScript Objects

### Objects

**Simple Example**

```typescript
const person: object = {
  name: 'max',
  age: 30,
}
```

**Specialize Object**

```typescript
const person: {} = {
  name: 'max',
  age: 30,
}
```

**Explicit Object Typing**

```typescript
const person: {
  name: string
  age: number
} = {
  name: 'max',
  age: 30,
}
```

#### Arrays

```typescript
const hobbies: string[] = ['Sports', 'Cooking']
```

```typescript
for (const hobby of hobbies) {
  console.log(hobby.toUpperCase())
}
```

#### Tuples [Docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#other-important-typescript-types)

```typescript
const roles: [number, string] = [2, 'author']
```

_what tuples enforces_

```typescript
const roles: [number, string] = [2, 'author']
// Type 'number' is not assignable to type 'string'
roles[1] = 10
```

```typescript
let roles: [number, string] = [2, 'author']
// Type '[number, string, string]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.
roles = [2, 'author', 'producer']
```

**Exceptions**

Typescript tuples does not enforce push errors

```typescript
const roles: [number, string] = [2, 'author']
roles.push('admin')
// (3) [2, 'author', 'admin']
```

### Enums [Docs](https://www.typescriptlang.org/docs/handbook/enums.html)

**Simple Example**

_With numeric initial_

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

_Without numeric initial_

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

**Example One**

```typescript
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
```

### Any

```typescript
let
```

## Union Types

Using union types can allow us to be more flexible with our code.

```typescript
function combine(input1: number | string, input2: number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}
```

## Literal Types

```typescript
function foo(action: 'add' | 'remove') {
  if (action === 'add') {
    // ....
  } else if (action === 'remove') {
    // ....
  }
}
```

## Type Alias (Custom Types) [Docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)

```typescript
type Point = {
  x: number
  y: number
}
```

## Functions and Types

```typescript
let addition: (a: number, b: number) => number

addition = add

function add(n1: number, n2: number) {
  return n1 + n2
}

console.log(addition(5, 7))
```

### Typing Functions with no return

```typescript
const foo = (): void => {
  console.log('hello from typescript')
}
```

## Unknown Type

`unknown` is better then `any` situations where the type is unclear. Using `unknown` forces another level of due diligence.

<!-- todo: add better example for unknown -->

```typescript
let userInput: unknown
let userName: string
```

## Never Type

**Simple Example**

```typescript
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}
```

## References

[TypeScript Beginners 2021](https://www.youtube.com/watch?v=BwuLxPH8IDs)
