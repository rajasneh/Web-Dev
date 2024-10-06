const mysql=require('mysql2');
const { faker } = require('@faker-js/faker');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:"delta_app",
    password:"Asneh@Raj281104"
});

let getRandomUser= ()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

let q="INSERT INTO user (id,username,email,password) VALUES ?";

let data=[];

for(let i=1;i<=100;i++){
    data.push(getRandomUser());
}

try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
} catch(err){
    console.log(err);
}

connection.end();
