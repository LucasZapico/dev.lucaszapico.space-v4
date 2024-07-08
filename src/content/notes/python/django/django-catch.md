---
title: "django catch" 
date_created: '2020/12/25'
last_modified: '2020/12/27'
tags: ["python","django", "notes", "general"]
categories: ["python","notes", "django"]
---

## Raw Notes 

### Common messages 

#### `unapplied migration(s)`

This means that their are changes to a model class that have not been applied to the database.

__solution__

```shell 
python manage.py makemigrations
```
and or
```shell
python manage.py migrate
```



### Django Apps 

```shell
python manage.py startapp <app_name>
```

### Simple REST API 

__Assumes simple Django instance is already running__

### Django Auth 

__authentication__
: verifies a user is who they claim.

__authorization__
: determines what an authenticated user is allowed to do.

### Reference 

[Rest Api Django](https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c)

### Definitions 

__serialize__
: the process of translating a data structure or object state into a format that can be stored or transmitted and reconstructed over and over.
: In API this is the process of transforming database tables or documents to JSON
