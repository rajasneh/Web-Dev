const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:"delta_app",
    password:"Asneh@Raj281104"
});

try{
    connection.query("SHOW TABLES",(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
} catch(err){
    console.log(err);
}
connection.end();
let getRandomUser= ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}