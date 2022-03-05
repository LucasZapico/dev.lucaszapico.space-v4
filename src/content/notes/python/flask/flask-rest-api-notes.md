---
title: 'Flask REST API Notes'
description: 'General Routing notes for Flask REST'
date-created: 2021/05/14 18:25:12
last-modified: 2021/09/01 19:47:32
isdraft: false
categories: ['flask', 'notes']
tags: ['flask', 'notes', 'reference', 'api']
type: 'note'
---

**Requirement.txt**

```txt
Flask-RESTful
Flask
```

**Imports**

```python
from flask import Flask, request
from flask_restful import Api, Resource
```

#### Simple Route

```python
#...
class HelloWorld(Resource):
  def get(self):
    return {"data": "hello world"}

  def post(self):
    return {"data": "posted"}

api.add_resource(HelloWorld, "/helloworld")
```

**Test**

```python
import requests
BASE_URL = "http://127.0.0.1:5002/"
test_get = requests.get(BASE_URL + 'helloworld')
test_post = requests.post(BASE_URL + 'helloworld')
print(test_get.json())
print(test_post.json())
```

#### Param in URL

```python
#...
class User(Resource):
  def get(self, user):
    return {"user": user}

api.add_resource(User, "/user/<string:user>")
```

**Test**

```python
#....
# PARAM IN URL
test_user_get = requests.get(BASE_URL + 'user/steve')
print(test_user_get.json())

```

#### [Argument Validation](https://flask-restful.readthedocs.io/en/latest/quickstart.html#argument-parsing)

**Example - Simple**

```python
from flask_restful import reqparse
#....

parser = reqparser.RequestParser()
parser.add_argument('email', type=str, help="email is required", required=True)
#....
```

**Example - Validate User Login Args**

```python
from flask_restful import reqparse
#....
user_login_args = reqparse.RequestParser()
user_login_args.add_argument("email", type=str, help="email is required", required=True)
user_login_args.add_argument("password", type=str, help="password", required=True)

class UserLogin(Resource):
  def put(self):
    args = user_login_args.parse_args()
    return {"data": args}

api.add_resource(UserLogin, "/user/login")
#....

```

#### [Data Formatting](https://flask-restful.readthedocs.io/en/latest/quickstart.html#data-formatting)

<!-- look into on pass two -->

```python
from flask_restful import fields, marshal_with


```
