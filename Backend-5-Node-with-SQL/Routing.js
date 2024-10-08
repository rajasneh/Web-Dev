const mysql=require('mysql2');
const { faker } = require('@faker-js/faker');
let express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const { v4: uuidv4 } = require("uuid");


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride("_method"));


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


//home route
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


//show route
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
           // console.log(result);
            res.render("showusers.ejs",{users});
        });
        } catch(err){
        console.log(err);
        res.send("Some error in Database");
        }
});

//edit route

app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        });
        } catch(err){
        console.log(err);
        res.send("Some error in Database");
        }
});


//update route
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    let {username:NewUsername,password:formPassword}=req.body;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            if(formPassword!=user.password){
                res.send("Wrong password");
            }else{
                let q2=`UPDATE user SET username='${NewUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
        } catch(err){
        console.log(err);
        res.send("Some error in Database");
        }
});

//add new user
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    //Query to Insert New User
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/user");
      });
    } catch (err) {
      res.send("some error occurred");
    }
  });
  
//delete

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });

  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
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