---
title: 'Docker Notes 2020'
description: 'General notes on Docker'
date-created: 2020/10/21
last-modified: 2021/09/01
isdraft: false
categories: ['docker', 'notes']
tags: ['docker', 'notes','reference','basics']
type: 'note'
---

## Common Commands
### DockerFile 
A `Dockerfile` is used to define an image for a project's specific specs.

### DockerFile
- FROM
- ENV
- RUN
- COPY
- CMD
- EXPOSE
- WORKDIR

### Images 

Pull an image from docker registry 
```shell
docker pull <NAME[:TAG]>
```

```shell
docker-compose build 
```
__BuildKit__
```shell

COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build

```

```shell
docker compose up
```
or
```shell
docker-compose up
```

__Build Image from Dockerfile__
```shell
docker build --tag <image-name:tag> <path>
```

__Example one__

```shell
docker build --tag expressapp:latest .
```



__List images__
```shell
docker images 
```

__Remove Image__
```shell
docker rmi <id>
```


### Containers
__List Containers__
```shell
docker ps -a
```

__Remove Container__
```shell
docker rm <ide>
```

__Run Container__
```shell
docker run <container>
```

__Access an exited Container shell__
```shell
docker run -ti --entrypoint=sh <contianerid|name>
```

List running containers and basic information
```shell
docker ps
```

List containers both running or stopped and basic information
```shell
docker ps -a
```

Stops a running container
```shell
docker stop silly_sammet
```


Remove a stopped container run `docker ps -a` to confirm removal
```shell
docker rm silly_sammet
```

__Example one__
```shell
docker run -p 80:80 docker/getting-started
```

__Example two__
```shell
docker run -p 3333:3333 <containerid|contianername>
```


Runs docker in the foreground

```shell
docker run -d -p 80:80 docker/getting-started
```

the `-d` flag will run docker in the background

```shell
docker attach <id>
```

or

```shell
docker attach <name>
```

##### Interactive Terminal

By default docker containers do not accept inputs through the terminal to enable this use the `-it` flag for interactive terminal

```shell
docker run -it
```

##### Port Mapping

```shell
docker
```

#### Tags

```shell
docker run node:12
```

A tag is a flag to specify a particular flavor of an image, the command without a tag will default to `latest`

### Images

Shows a list of images
```shell
docker images
```
or 
```shell
docker images --all
```

removes an image Note: the image cannot be in use by any container
```shell
docker rmi <image-name|imageid>
```

Runs and image if the image already exists on machine else pulls latest image and runs.
```shell
docker run <image-name|imageid>
```



#### Run Container

```shell
docker run --rm -it -p 3000:3000/tcp <imageName>
```

```shell
docker pull node
```

Pulls an instance of an image

> Containers only run as log as the process they contain is running is live, such as a database or web service.

#### Build Image

```shell
docker build .
```

or

```shell
docker build ./path/to/dir
```

or **best practice** tag your image with a name

```shell
docker build . -t imageName
```


## Docker Development vs Production Workflow
General notes and examples for discovery for Docker multi env workflows that ideally do not deviate drastically from what the workflow I have already explored and optimized. 

### Workflow One 
- single dockerfile 
- compose defined env 

*Dockerfile*
```docker 
FROM node:17-alpine3.14 as base

WORKDIR /app
COPY package*.json /
EXPOSE 3444:3444

FROM base as production
RUN npm install -g pm2
ENV NODE_ENV=production
COPY . /
CMD ["pm2", "start", "src/index.js"]

FROM base as development
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "src/index.js"]
```

*docker.compose.yml*
```yml
version: '3.8'
services:
	app:
		build:
			context: ./
			target: development
	volumes:
		- .:/app
	command: npm run start:dev
	ports:
		- "3444:3444"
	environment:
		NODE_ENV: development
```

*.dockerignore*
```txt
.git
node_modules
```

#### Commands 
The image will be names by the root dir name
```shell
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose build
```

```shell 
docker compose up
```




## Docker in different environments 
- [docker with node in dev and prod - sentinelstand](https://www.sentinelstand.com/article/docker-with-node-in-development-and-production)
- [docker dev prod - logrocket](https://blog.logrocket.com/node-js-docker-improve-dx/)
- [Advanced docker compose - runnable](https://runnable.com/docker/advanced-docker-compose-configuration)


### Reference

- [Anatomy of a DockerFile](https://gist.github.com/adamveld12/4815792fadf119ef41bd)
- [Docker Tutorial for Beginners](https://www.youtube.com/watch?v=fqMOX6JJhGo)

- [Docker dev architecture for multiple dev env - vsupalov](https://vsupalov.com/same-dockerfile-dev-staging-production/)
- [Docker compose in production ? - vsupalov](https://vsupalov.com/docker-compose-production/)
### For Review

- port mapping
- volume mapping
