const express=require("express");
const app=express();
let path=require("path");

const port=3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});



app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("You are in hello path");
});