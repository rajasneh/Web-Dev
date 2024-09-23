const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log("Listening on port");
});
app.get("/register",(req,res)=>{
    res.send("Standard Get request");
});
app.post("/register",(req,res)=>{
    res.send("Standard Post request");
});
