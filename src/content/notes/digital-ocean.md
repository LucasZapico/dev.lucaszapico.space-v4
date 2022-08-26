---
title: 'digital-ocean'
description: ''
date-created: '2022/03/05'
last-modified: '2022/08/24'
categories: ['digital-ocean', 'development', 'dev-ops']
tags: ['digital-ocean', 'development', 'dev-ops', 'hosting', 'notes']
isdraft: true
type: 'note'
---

# Digital Ocean

## catch

**Add docker image to Digital Ocean registry**

```shell
docker tag <my-image> registry.digitalocean.com/<my-registry>/<my-image>
```

```shell
docker push registry.digitalocean.com/<my-registry>/<my-image>
```
