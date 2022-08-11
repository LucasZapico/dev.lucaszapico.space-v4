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

**Get/Fetch Project**

```shell
hs fetch --account=<name> <project-src>
```

**Upload/Push Project**

```shell
hs upload --account=<name> <project-src>
```

**Watch Project**

```shell
hs watch <local-name> <remote-name>
```

### Generating Elements

```sh
hs cerate <type> <name> <dest>
```

**Example**

```sh
hs create module <module-name> modules
```

## HubSpot Pages

### Making Pages 😕

`HubSpot > Marketing > Website > Website Pages`

1. create
2. website page

- Name

3. theme page --> skip to templates
4. settings

- page title
- advanced options
  - data source --> hubdb

5. publish
6. click url

## Working with Drag and Drop

**Quick HubSpot Doc Reference**

- `dnd_area`
- [dnd_section](https://developers.hubspot.com/docs/cms/hubl/tags/dnd-areas#dnd-section)
- `dnd_row`
- `dnd_column`
- `dnd_row`

### Drag and Drop Areas

- [Drag and Drop Areas](https://developers.hubspot.com/docs/cms/hubl/tags/dnd-areas)

### Drag and Drop Sections

### Drag and Drop module

### Drag and Drop Row

### Drag and Drop Column

#### Modules

- [Using Modules in Templates](https://developers.hubspot.com/en/docs/cms/building-blocks/modules/using-modules-in-templates)
- [Field Types](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)

### Design Pages 😕

`HubSpot > Marketing > Files and Templates > Design Tools`

## Gochas 😖

### Templates

- if you make a change locally in template and you have to delete and make a new page to see template changes...?
  - this was unclear
  - I had to just dig around until I figured it out.

### Modules

- changes in modules made in the design manager are not pushed locally
- making modules locally is orders of magniture more convoluted then making modules in the design manager

## Reference

- [Getting Started with local dev - developers.hubspot](https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development)
- [HubSpot CLI reference - developers.hubspot](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)

### Developer Quality of Life

1. Install and Enable Unibeautify - Universal Formatter
2. configure vscode setting.json

_setting.json_

```json
  "[html-hubl]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Glavin001.unibeautify-vscode",
  },
```

_.unibeautifyrc.json_

```json
{
  "HTML": {
    "beautifiers": ["JS-Beautify", "Pretty Diff"],
    "indent_size": 2,
    "indent_char": " ",
    "wrap_line_length": "80"
  }
}
```
