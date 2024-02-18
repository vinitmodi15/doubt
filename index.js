const { faker } = require('@faker-js/faker');
const mysql = require ('mysql2');
let getUser = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),

  ];
}
console.log(getUser());
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:"123456789",
  });
  // let q ="SHOW TABLES";
  // let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)"; 
  //for single value passing we have to write ? times till howmany we are having coloumns
  // let user = ["123","123we","123@gmail.com","asdfghjkl;"];


  let q = "INSERT INTO user(id,username,email,password) VALUES ?";
  let users =[
  //            ["123a","123wea","123@gmail.coma","aserdfghjkla;"],
  //            ["123b","123web","123@gmail.comb","asdrewfghjklb;"],
             ["123dfregtreb","123wesfretretb","123@gmsdfaitretretl.comfsdb","asdrewretretrefghjkdsflb"]
            ];
  try {
    connection.query(q,[users],(err,result)=>{ // connection query means db k upr koi query run krna  
        if(err) throw err;
        console.log(result)
    });
  } catch (err) {
    console.log(err);
  }
  connection.end();
  
