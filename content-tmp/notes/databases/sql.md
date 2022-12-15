---
title: "SQL Notes"
description: ""
date-created: 2017/03/15 14:19:17
last-modified: "2022/10/02"
isdraft: false
categories: ["sql", "notes"]
tags: []
type: "note"
---

## Notes and Reference SQL Language

### SQL Categories

- **DML** Data Manipulation Language
- **DDL** Data Definition language

#### DBMS Database Management System

- oracle
- MySql
- SQLlite

### Quick Reference

_Note SQL is not case sensitive but it is general practice to distinguish fields_

- not case sensitive
- not white space sensitive
- not semi collen sensitive (officially it should)

Though the addition of each of these formats are best practice and general convention.

### Important

- **String values in SQL are surrounded in single quotes**
- **equality is a single =**

#### Select statement

```SQL
SELECT * FROM table;
// returns all columns from some table

SELECT * FROM table WHERE condition
// returns all columns from some table where a condition is met

SELECT * FROM database.table WHERE condition
// in some cases the database needs to be specified, though many SQL databases server have default databases that a query will be aplied to
```

Examples Select:

```SQL
SELECT FirstName FROM Employee;
// returns Firstname column from employee

SELECT FirstName, LastName FROM Employee;
// returns 2 columns FirstName and LastName

SELECT *  FROM Employee;
// returns all columns from employee table

SELECT *  FROM Employee WHERE LastName = 'Smith';
// returns all columns where lastname is equal to Smith
```

#### Insert Statement

```SQL
INSERT INTO table (a,b,c)
  VALUES (1,2,3)
  ORDER BY b;
```

#### Update Statement

```SQL
UPDATE table SET a = 7, b =5;
```

#### Delete Statement

```SQL
DELETE FROM table WHERE a = 7;
```

#### Record match query

```SQL
SELECT COUNT( * ) FROM table;
```

#### Where

The **Where** clause is the predicate. Where is boolian. It is either true of false

```SQL

```

## Popular SQL databases

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

Upon download of dng mySQL shell and mySQL utilities expose mysql/bin to shell of choice

> Example:
>
> mySQL shell path and mySQL utilities path on system
>
> ```
> usr/local/mysql/bin && usr/local/mysql-shell/bin
> ```
>
> navigate to shell profiles .bashrc, .bash_profile or .zshrc add
>
> ```
> export PATH=${PATH}:/usr/local/mysql-shell/bin
> export PATH=${PATH}:/usr/local/mysql/bin
> ```
>
> Open terminal of choice
>
> ```
> mysql -u user-name -p
> ```
>
> enter:
>
> prompt for password
>
> Sucess, we have entered the mysql shell

```
> shell mysql show databases;
//shows list of db's in current server
```

##### primary-key point

###### _sub-key point_

**Key Term**: Description of key term

_sub point_

> Example: Flipping a fair coin.
> Given:
>
> - There exist only two possible outcomes 'heads' 'tails'
> - Each outcome is equally likely. (Implied implicitly by the term fair)
>   (Cite)

---

### Definitions

**Term**

- Definition:
- Example:
- link to wiki:
- cite of term in source:
- cite of term in doc:

**Term**

- Definition
- Example
- link to wiki
- cite of term in source
- cite of term in doc

## Notes on NoSQL Databases

### Popular SQL databases

- [CouchDB](https://couchdb.apache.org/)
- [Redis](https://redis.io/)

---

## Resources and Reference

Notes within this doc have been drawn from the following sources:

- source: [**MySQL shell CheatSheet**](https://gist.github.com/hofmannsven/9164408)

  **Example of literal cite**

  - Sheldon Ross M(2010). A first course in probability/ Sheldon Ross. - 8th ed. Upper Saddle River, NJ: Pearson Prentice Hall

### Document Details

date initialized: November,25,1017
passes to date: 1
current pass:
subject:
