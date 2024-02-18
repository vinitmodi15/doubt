const { faker } = require('@faker-js/faker');
const mysql = require ('mysql2');
const express = require("express");
const app = express();
const path = require("path"); 
app.set("set engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const methodoverride = require("method-override");
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:"123456789",
  });

//   let getUser = ()=>{
//     return [
//       faker.string.uuid(),
//       faker.internet.userName(),
//       faker.internet.email(),
//       faker.internet.password(),

//     ];
// };
  

port = 8080;


//home route
app.get("/",(req,res)=>{
    let q = `SELECT count(*) FROM user`;
    try {
            connection.query(q,(err,result)=>{ // connection query means db k upr koi query run krna  
            if(err) throw err;
            
            // console.log(result[0]['count(*)']);
            // array ke form m data aata hai to uska 0th index vaala element dedo and uss key ka naam "count(*)" and inverted commas m hai to usko acces kiya hai.
            // console.log(result); 
            let count = result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
      } catch (err) {
            console.log(err);
            res.send(err);
      }
    //      res.send("server is working")
})

//show users

app.get("/users",(req,res)=>{
  // res.send("success");
  let q = `SELECT * FROM user`;
  try {
    connection.query(q,(err,users)=>{ //hota to err,result hi hai yha p hum users le rhe hai kyoki db m se data aachuka users ka jab query run huyi and vo simple name k liye chnage kr rhe hai  
    if(err) throw err;
    console.log(users);
    res.render("showusers.ejs",{users});
});
} catch (err) {
    console.log(err);
    res.send(err);
}

})

//EDIT ROUTE
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`; //idhr '$id' ese quotes m isliye liha kyoki console m jo id print ho rhi hai vo double quote m nhi to vo as a 
  // console.log(id);
  try {
    connection.query(q,(err,result)=>{ //hota to err,result hi hai yha p hum users le rhe hai kyoki db m se data aachuka users ka jab query run huyi and vo simple name k liye chnage kr rhe hai  
    if(err) throw err;
    // let user = result[0];
    // console.log(result)
    res.render("edit.ejs");
});
} catch (err) {
    console.log(err);
    res.send(err);
}

  res.render("edit.ejs");
})


//UPDATE (DB) ROUTE 
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  res.send("success");
})


app.listen(port,()=>{
  console.log(`listening to the port ${port}`);
});
  // console.log(getUser());
//data jaa chuka hai apne db mk islye yha comment krdiy apn ne

// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
//   let data = [];
//   for(let i=1;i<=100;i++){
//     data.push(getUser());
//   }