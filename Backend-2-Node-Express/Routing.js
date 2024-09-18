const express=require("express");
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("You contacted root path");
});
app.get("/search",(req,res)=>{
    res.send("You contacted search path");
});

app.get("/help",(req,res)=>{
    res.send("You contacted help path");
});

app.get("/contact",(req,res)=>{
    res.send("You contacted contact path");
});

app.get("*",(req,res)=>{
    res.send("This path dosent exist");
});