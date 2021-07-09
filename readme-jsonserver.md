# Getting started

## Inital JSON-Server
Initialize an npm project
```
npm init
```

Install JSON Server 

```
npm install -g json-server
```

Create a `db.json` file with some data

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```bash
json-server --watch db.json
```

Go to http://localhost:3000 

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## Inital Faker
Install faker
```
npm install faker --save
```

Now, create a generate.js file we use this file to generate data to storage in database.json file
add the following code:
```js
//Import library
const fs = require("fs");
var faker = require('faker');

//Declare json struture
var database = { teamMember : []};

//Forloop push item into array "teamMember".
for (var i = 1; i<= 10; i++) {
  database.teamMember.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    description: faker.lorem.sentences(),
    phone: faker.phone.phoneNumber(),
    avart: faker.image.avatar()
  });
}

//Write data from variables to a file.
fs.writeFileSync(
  "./db-teamMember.json",
  JSON.stringify(database)
);

```

Execute generate.js to generate team member data to file.
```bash
node ./generate.js
```
You can see the output file is "db-teamMember.json" in the root directory. 



Start JSON Server "db-teamMember.json"
```bash
json-server --watch db-teamMember.json
```

### Add on

Install moment 
```
npm install moment --save
```

```js
//Import moment library
var moment = require('moment');  

//Declare role type
var ROLE_TYPE = [
  "DEV", "SA", "BA", "DBA", "PM", "USER", "OPER"
]
.
.
.
//Add this code in step assign teamMember
    birthDate: moment( faker.date.recent() ).format("DD/MM/YYYY"),
    age: "AGE " + faker.datatype.number(50),
    role: faker.random.arrayElement(ROLE_TYPE),
```

Retry to run generate.js again and start json-server
```bash
node ./generate.js
json-server --watch db-teamMember.json
```
