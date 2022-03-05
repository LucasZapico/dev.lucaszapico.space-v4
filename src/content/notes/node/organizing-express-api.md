---
title: 'Organizing Express API'
description: 'Note and example for modularizing express api'
date-created: 2021/08/26
last-modified: 2021/08/26 10:09:16
isdraft: true
categories: ['api', 'express', 'node', 'structure']
tags: ['api', 'architecture', 'node', 'express']
type: 'note'
---

## Directory Structure Example

- [Express REST API project structure](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)

__Example One__

```
 src/ 
	 ├── app.js --- app entry point 
	 ├── /api --- controller layer: api routes 
	 ├── /config --- config settings, env variables 
	 ├── /services --- service layer: business logic 
	 ├── /models --- data access layer: database models 
	 ├── /scripts --- miscellaneous NPM scripts 
	 ├── /subscribers --- async event handlers 
	 └── /test --- test suites
```

__Example Two__

```txt

	src/
		|- controllers/ -> logic before saving to the db, check permission, etc..
		|- db/
			|-- models/ -> the models 
			|-- config/ -> config about the db, connection to the db etc
			|-- migrations/ -> all the migrations file for the db
		|- helpers/ -> helpers function like sum, total, pluralize, etc
		|- routes/ -> all the rest api route, where they take a controller as callback
		|- services/ -> stripe, aws s3 etc
		|- test -> all your test
		|-package.json -> all your dependencies
		|-index.js -> where everything start, your server instance etc

```

## MVC

__MVC Example - intermediate__

```txt

	src/
		|- api/ --- everything related to routes
			|- controllers/ --- valiadate data 
			|- models/ --- models and schemas
			|- helpers/ --- generic helpers functions that maybe used in many places
			|- services/ --- business logic, data transforms and calls to the database
			|- routes/ --- routes 
			|- middlewares/ --- routes 
			|- validation/ --- 
		|-- config/ --- config files  
		|- test 
		|-package.json 
		|-index.js 

```

__Example - Startup/Enterprise__

- use typeScript 

```txt

	test/
	src/
		|- api/ --- everything related to routes
			|- controllers/ --- valiadate data 
			|- models/ --- models and schemas
			|- helpers/ --- generic helpers functions that maybe used in many places
			|- services/ --- business logic, data transforms and calls to the database
			|- routes/ --- routes 
			|- middlewares/ --- routes 
			|- validation/ --- 
		|-- config/ --- config files  
		|-package.json 
		|-index.js
	
```


--- 

## Layers

## Data Layer 

[node|express|postgress - logrocket](https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/)

### ORM 

[__Sequelize__](https://sequelize.org/v7/manual/model-basics.html#concept)
- [How to use sequelize with node|express](https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz)
- [using sequelize orm with node|express - stack abuse](https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/)

### Reference

__Articles__
- [Scotch.io - Keeping API routing clean using Express Routes](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers)
- [Scotch.io - example](https://github.com/searsaw/express-routing-example/)
- [React, Node Express, Postgres walk through - BezKoder](https://www.bezkoder.com/node-express-sequelize-postgresql/)
	- [Sequelize model](https://www.bezkoder.com/react-node-express-postgresql/#Define_the_Sequelize_Model)
- [Node|Express|Postgres - REST API ](https://www.taniarascia.com/node-express-postgresql-heroku/)
- [Node|Express|MySQL - REST API](https://blog.logrocket.com/build-rest-api-node-express-mysql/)

__Videos__
- [Folder Structure for API's - PedroTech](https://www.youtube.com/watch?v=oNlMrpnUSFE)
- [Clean Architecture - Dev Mastery](https://www.youtube.com/watch?v=CnailTcJV_U)
