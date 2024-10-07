const mysql=require('mysql2');
const { faker } = require('@faker-js/faker');
let express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

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







app.get("/",(req,res)=>{
    let q=`SELECT COUNT(*) FROM user`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        let count=result[0]["COUNT(*)"];
        res.render("home.ejs",{count});
    });
    } catch(err){
    console.log(err);
    res.send("Some error in Database");
    }
});

app.listen("8080",()=>{
    console.log("Server is listening on 8080");
});










// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// } catch(err){
//     console.log(err);
// }