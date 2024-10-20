//API Token as query String
const express=require("express");
const app=express();
const ExpressError = require("./ExpressError");


app.get("/random",(req,res)=>{
    res.send("Hello this is a random page");
});

const checkTOken=(req,res,next)=>{
    let{token}=req.query;
    if(token=="giveacess"){
        next();
    }
    throw new ExpressError(401,"Acess Denied");
};

app.get("/api",checkTOken,(req,res)=>{
    res.send("DATA");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.get("/",(req,res)=>{
    res.send("Hello i am root");
    console.log("ROOT");
});

//If route not match with upper code this will be executed
app.use((err,req,res,next)=>{
    let{status=500,message="Some error occured"}=err; // if status or message is not defined 
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});
