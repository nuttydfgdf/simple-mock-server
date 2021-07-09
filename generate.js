//Import library
const fs = require("fs");
var faker = require('faker');
//Import moment library
var moment = require('moment'); 

//Declare role type
var ROLE_TYPE = [
    "DEV", "SA", "BA", "DBA", "PM", "USER", "OPER"
]


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
    avart: faker.image.avatar(),
    birthDate: moment( faker.date.recent() ).format("DD/MM/YYYY"),
    age: "AGE " + faker.datatype.number(50),
    role: faker.random.arrayElement(ROLE_TYPE),
  });
}

//Write data from variables to a file.
fs.writeFileSync(
  "./db-teamMember.json",
  JSON.stringify(database)
);