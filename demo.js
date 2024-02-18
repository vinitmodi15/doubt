const mysql = require ('mysql2');

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:"123456789",
  });
  let q = "INSERT INTO user(id,username,email,password) VALUES ('12sd3','adsda','asdasdasd','asdasd')";
  try {
    connection.query(q,(err,result)=>{ // connection query means db k upr koi query run krna  
        if(err) throw err;
        console.log(result)
    });
  } catch (err) {
    console.log(err);
  }
  connection.end();
  