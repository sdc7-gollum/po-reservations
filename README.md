# Project Overnight

> A front end, reconstructed.



## Related Projects

  - https://github.com/project-overnight/po-reviews
  - https://github.com/project-overnight/po-description
  - https://github.com/project-overnight/po-photo-banner

## Table of Contents

1. [Requirements](#Requirements)
2. [Setup](#Setup)
3. [Usage](#Usage)
4. [Development](#Development)


## Requirements

A recent version of npm.

MongoDB installed and running.

## Setup

From within the root directory:

```
npm install -g webpack
npm install
```

Create an .ENV file with the information required in the .ENV-EXAMPLE file, then:

```
npm run seed
```

You may receive an error if you did not already have a collection with that name. This is normal! The data still loads.

If in production, change the ```webpack.config.js``` and ```package.json``` client script to reflect that.

## Usage

After going through all the steps described in Setup, run:

```
npm run client
npm start
```

## Development

To run the server where it will hot-reload, start it with

```
npm run start:dev
```
## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |       /api/items/:id        |  CREATE a new item into DB   |
| **GET**   |       /api/items/:id        |  READ data and return data   |
| **PATCH** |       /api/items/:id        |  UPDATE item with new image  |
| **DELETE**|       /api/items/:id        |  DELETE item based on ID     |