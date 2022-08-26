---
title: 'HubDB'
description: 'General notes on HubSpot Development'
date-created: '2022/05/17'
last-modified: '2022/08/23'
isdraft: true
categories: ['hubspot', 'notes']
tags: ['hubspot', 'notes', 'hubdb']
type: 'note'
---

- Custom objects are created through API call
  - programticlly
  - insomnia/postman
  - hubspot dev docs

## Prerequisits

- HubSpot APIkey

**Setup Call**

1. `https://api.hubapi.com/crm/v3/schemas`
2. Add APIkey to auth
3. Content-type: application/json
4. add schema

**Object Requirements**

- name
- properties
- crm objects

> objects name and label cannot be changed after object creations

**Body Example**

```json
{
  "name": "Cat",
  "labels": {
    "singular": "cat",
    "plural": "cats"
  },
  "primaryDisplayProperty": "name",
  "secondaryDisplayProperties": ["breed"],
  "requiredProperties": ["name", "breed", "weight", "favorite-food"],
  "searchableProperties": ["name", "breed", "weight", "favorite-food"],
  "properties": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "fieldType": "text"
    },
    {
      "name": "breed",
      "label": "Breed",
      "type": "string",
      "fieldType": "text"
    },
    {
      "name": "weight",
      "label": "Weight",
      "type": "Number",
      "fieldType": "number"
    },
    {
      "name": "favorite-food",
      "label": "Favorite Food",
      "type": "string",
      "fieldType": "text"
    }
  ],
  "associatedObjects": ["CONTACT"]
}
```

> HubSpot custom object properties can be created in the GUI

Custom objects are located with default objects.

### Node Snippet

```js
const hubspot = require('@hubspot/api-client')

const hubspotClient = new hubspot.Client({ apiKey: 'YOUR_HUBSPOT_API_KEY' })

const labels = {
  singular: 'My object',
  plural: 'My objects',
}
const ObjectSchemaEgg = {
  labels,
  requiredProperties: ['my_object_property'],
  searchableProperties: [null],
  primaryDisplayProperty: 'my_object_property',
  secondaryDisplayProperties: [null],
  properties: [
    {
      name: 'my_object_property',
      label: 'My object property',
      isPrimaryDisplayLabel: true,
    },
  ],
  associatedObjects: ['CONTACT'],
  name: 'my_object',
}

try {
  const apiResponse = await hubspotClient.crm.schemas.coreApi.create(
    ObjectSchemaEgg
  )
  console.log(JSON.stringify(apiResponse.body, null, 2))
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}
```

## Reference

**Hubspot API URL**
`https://api.hubapi.com`
