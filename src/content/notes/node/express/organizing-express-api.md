---
title: Organizing Express API
description: Note and example for modularizing express api
date-created: 2021/08/26
<<<<<<< HEAD:bak/notes/node/organizing-express-api.md
last-modified: '2022/07/17'
=======
last-modified: '2022/05/10'
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c:src/content/notes/node/express/organizing-express-api.md
isdraft: true
categories: ['api', 'express', 'node', 'structure']
tags: ['api', 'architecture', 'node', 'express']
type: 'note'
---

## Directory Structure Example

- [Express REST API project structure](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way)

**Example One**

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

**Example Two**

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

**MVC Example - intermediate**

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

**Example - Startup/Enterprise**

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

<<<<<<< HEAD:bak/notes/node/organizing-express-api.md
=======
| Main Layer           | Type                   | What logic goes here?                                                                                                                                                                           |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTP logic layer     | Routes + Controllers   | Routes - handle the HTTP requests that hits the API and route them to appropriate controller(s) Contollers - take request object, pull out data from request, validate, then send to service(s) |
| Business logic layer | Services + Data Access | Contains the business logic, derived from business and technical requirements, as well as how we access our data stores\*\*                                                                     |
|                      |                        |                                                                                                                                                                                                 |

>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c:src/content/notes/node/express/organizing-express-api.md
### ORM

[**Sequelize**](https://sequelize.org/v7/manual/model-basics.html#concept)

- [How to use sequelize with node|express](https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz)
- [using sequelize orm with node|express - stack abuse](https://stackabuse.com/using-sequelize-orm-with-nodejs-and-express/)

### Reference

**Articles**

<<<<<<< HEAD:bak/notes/node/organizing-express-api.md
=======
- [softwareontheroad - ideal nodejs project structure ](https://softwareontheroad.com/ideal-nodejs-project-structure/)
>>>>>>> fd21fd6232681710c98ae70d534cb1106ed2c16c:src/content/notes/node/express/organizing-express-api.md
- [Scotch.io - Keeping API routing clean using Express Routes](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers)
- [Scotch.io - example](https://github.com/searsaw/express-routing-example/)
- [React, Node Express, Postgres walk through - BezKoder](https://www.bezkoder.com/node-express-sequelize-postgresql/)
  - [Sequelize model](https://www.bezkoder.com/react-node-express-postgresql/#Define_the_Sequelize_Model)
- [Node|Express|Postgres - REST API ](https://www.taniarascia.com/node-express-postgresql-heroku/)
- [Node|Express|MySQL - REST API](https://blog.logrocket.com/build-rest-api-node-express-mysql/)

**Videos**

- [Folder Structure for API's - PedroTech](https://www.youtube.com/watch?v=oNlMrpnUSFE)
- [Clean Architecture - Dev Mastery](https://www.youtube.com/watch?v=CnailTcJV_U)
