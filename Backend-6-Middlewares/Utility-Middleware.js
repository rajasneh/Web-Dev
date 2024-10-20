const express=require("express");
const app=express();

//Utility Middleware

//logger
app.use((req,res,next)=>{
    req.time=Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});




app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

app.get("/",(req,res)=>{
    res.send("Hello i am root");
});
app.get("/random",(req,res)=>{
    res.send("Hello this is a random page");
});



//If route not match with upper code this will be executed
app.use((req,res)=>{
    res.send("Page not found!");
});