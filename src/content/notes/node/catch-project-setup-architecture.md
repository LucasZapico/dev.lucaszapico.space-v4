---
title: catch-project-setup-architecture
description: 
date-created: 2022-02-09
last-modified: 2022-02-09
categories: [node, development, architecture] 
tags: [node, architecture]
isdraft: false
type: note
---

# catch-project-setup-architecture

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
4. 

## Directory Templates 

__Example One__

```
 src 
	 ├── app.js app entry point 
	 ├── /api controller layer: api routes 
	 ├── /config config settings, env variables 
	 ├── /services service layer: business logic 
	 ├── /models data access layer: database models 
	 ├── /scripts miscellaneous NPM scripts 
	 ├── /subscribers async event handlers 
	 └── /test test suites
```

__Example Two__

```txt

	src
		|- controllers/ -> logic before saving to the db, check permission, etc..
		|- db/
			|-- models/ -> all the stuff who touch a models himself, the schema,etc
			|-- config/ -> config about the db, connection to the db etc
			|-- migrations/ -> all the migrations file for the db
		|- helpers/ -> helpers function like sum, total, pluralize, etc
		|- routes/ -> all the rest api route, where they take a controller as callback
		|- services/ -> stripe, aws s3 etc
		|- test -> all your test
		|-package.json -> all your dependencies
		|-index.js -> where everything start, your server instance etc

```


## Data Layer 

### ORM 



----
## Reference 

[Node Architecture Best Practices - Scoutapm](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#bestpractices)

[Node Project Architecture - logRocket](https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/#rule2keepaclearseparationbetweenthebusinesslogicandtheapiroutes)

[Using Sequelize Orm](https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/)