# HubSpot API contact object Reference 

## Table of Contents

- [HubSpot API contact object Reference](#hubspot-api-contact-object-reference)
  - [Table of Contents](#table-of-contents)
  - [Document Objective](#document-objective)
  - [Quick Ref](#quick-ref)
  - [Contact Object API Endpoint Reference](#contact-object-api-endpoint-reference)
    - [Get contact with given properties](#get-contact-with-given-properties)
    - [Contact Object Schema](#contact-object-schema)
    - [Contact Search](#contact-search)

## Document Objective 

The objective of this document is to be a quick reference for response, payloads and gotcha's associated with the contact endpoint. 

The need for this document comes from the fact that some of the functionality associated with contact and object behavior and manipulation is unclear and can require quite a bit of dev time to figure out how to get the desire functionality. This document aims to reduce this dev spin and confusion as much as possible. 



## Quick Ref 

- [Example - contact schema from API](./examples/hsContactSchema.example.json) 
- [Example - contact ]

## Contact Object API Endpoint Reference

__Base Contact Endpoint__
```txt
https://api.hubapi.com/crm/v3/schemas/contact/{id}
```

__Contact by ID Endpoint__
```txt
https://api.hubapi.com/crm/v3/schemas/contact/{id}
```

__List Contacts__
```txt
https://api.hubapi.com/crm/v3/objects/contact
```


### Get contact with given properties 

__Gotchas__:

- Note how the properties are passed in as an array in the query
- To get the available properties on a given object including custom or unqiue properties to the account use the `https://api.hubapi.com/crm/v3/schemas/contact` to get an exhaustive list.

__Example - get contact by ID with properties__
```txt
https://api.hubapi.com/crm/v3/objects/contact/25301?properties=hubspot_owner_id,email,firstname,lastname,%0A%0A%0A
```

__Response__

```json
{
	"id": "25301",
	"properties": {
		"createdate": "2022-01-27T13:01:29.559Z",
		"email": "foo@example.com",
		"firstname": "Tim",
		"hs_object_id": "25301",
		"hubspot_owner_id": "159157790",
		"lastmodifieddate": "2022-07-02T19:31:14.098Z",
		"lastname": "Exampleton",
		
	},
	"createdAt": "2022-01-27T13:01:29.559Z",
	"updatedAt": "2022-07-02T19:31:14.098Z",
	"archived": false
}
```

### Contact Object Schema 

- This schema can be used as a reference to see what properties are available from contact 

__Endpoint__
```txt
https://api.hubapi.com/crm/v3/schemas/contact
```

### Contact Search 

```txt
https://api.hubapi.com/crm/v3/objects/contacts/search
```

__body - payload__
```json
{
	"filterGroups": [
		{
			"filters": [
				{
					"propertyName": "hs_object_id",
					"operator": "EQ",
					"value": "29251"
				}
			]
		}
	],
	"properties": [
		"city",
		"zip",
		"state",
		"address",
		"phone",
		"hubspot_owner_id",
		"email",
		"firstname",
		"lastname",
	]
}
```