---
title: 'Notes on Project Setup'
description: ''
date-created: 2022/02/09
last-modified: '2022/08/24'
categories: ['node', 'development', 'setup']
tags: ['node', 'architecture', 'setup']
isdraft: true
type: note
---

# Node Project Setup

- linter
- directory structure
  - compartmentalizing concerns
- testing

---

1. init
   1. gitignore
   2. linter
2. routes
3. models

- [[organizing-express-api]]

## Simple Setup

1. git
   1. gitignore
2. linter
3. ?env

## Intermediate Setup

1. git
   1. gitignore
2. linter
3. env
4. test?
5. documentation? (swagger)
6. logging
7. index (reducer files)

## Enterprise/Startup Level Setup

1. git
   1. gitignore
2. env
3. linter
4. test?
   1. enhanced testing (controller tests, routes tests, services tests, model test)
5. logging
6. documentation? (swagger)
7. TypeScript
8. index (reducer files)

---

## Reference

[Node Architecture Best Practices - Scoutapm](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#bestpractices)

[Node Project Architecture - logRocket](https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/#rule2keepaclearseparationbetweenthebusinesslogicandtheapiroutes)

[Using Sequelize Orm](https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/)
