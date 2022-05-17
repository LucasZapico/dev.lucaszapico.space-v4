---
title: 'HubSpot CMS Dev'
description: 'General notes on HubSpot Development'
date-created: '2022/05/16'
last-modified: '2022/05/16'
isdraft: true
categories: ['hubspot', 'notes']
tags: ['hubspot', 'notes']
type: 'note'
---

## Catch

- app developer account/portals are different from developer sandbox account/portals

## CMS Development

### New Project or Env

```shell
hs init
```

### Add a Portal(account) to existing env

```shell
hs auth
```

This will walk through the steps add authorization to any accounts a dev has access to and add credentials to `hubspot.config.yml`

```yml
defaultPortal: sandbox
portals:
  - name: sandbox
  	portalId: 345
    authType: personalaccesskey
    personalAccessKey: >-
      xxxxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxxx
    auth:
      tokenInfo:
        accessToken: >-
          xxxxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxxx
        expiresAt: '2020-02-24T19:38:39.164Z'
```

### Working with Projects

__Get/Fetch Project__
```shell
hs fetch --account=<name> <project-src>
```

__Upload/Push Project__
```shell
hs upload --account=<name> <project-src>
```

__Watch Project__
```shell
hs watch <local-name> <remote-name>
```

### Reference - CMS

- [Getting Started with local dev - developers.hubspot](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
- [HubSpot CLI reference - developers.hubspot](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)



## App Development
