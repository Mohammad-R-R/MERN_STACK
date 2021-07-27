const express = require("express");
// npm install --save faker
var faker = require('faker');
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});



// const users = [
//   { firstName: "Reimu",  lastName: "Hakurei"    },
//   { firstName: "Marisa", lastName: "Kirisame"   },
//   { firstName: "Sanae",  lastName: "Kochiya"    },
//   { firstName: "Sakuya", lastName: "Izayoi"     },
//   { firstName: "Momiji", lastName: "Inubashiri" }
// ];
  
// app.get("/api/users", (req, res) => {
//   res.send( users );
// });


class User {
  
  constructor(){
    this._id = Math.floor(Math.random() * (100 - 1) + 1);
    this.firstName = faker.name.firstName();
    this.lastName=faker.name.lastName();
    this.phoneNumber=faker.phone.phoneNumber();
    this.Email=faker.internet.email();
    this.password=faker.internet.password();
  }

}

class Company {
  constructor(){
    this._id = Math.floor(Math.random() * (100 - 1) + 1);
    this.name = faker.name.firstName();
   
    this.address=faker.address.streetName();
    this.address=faker.address.city();
    this.address=faker.address.zipCode();
    this.address=faker.address.country();

  }

}

app.get("/api/users/new", (req, res) => {
  res.json( new User() );
});

app.get("/api/companies/new",(req,res) =>{
  res.json(new Company());
});

app.get("/api/user/company",(req,res) =>{

  res.json({User:new User ,Company: new Company()});
});
const server = app.listen(8000, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);