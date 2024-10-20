//API Token as query String
const express=require("express");
const app=express();



app.get("/random",(req,res)=>{
    res.send("Hello this is a random page");
});

const checkTOken=(req,res,next)=>{
    let{token}=req.query;
    if(token=="giveacess"){
        next();
    }
    res.send("ACESS DENIED");
};

app.get("/api",checkTOken,(req,res)=>{
    res.send("DATA");
});

app.get("/tokens",(req,res)=>{
    res.send("GG");
});

app.get("/",(req,res)=>{
    res.send("Hello i am root");
    console.log("ROOT");
});

//If route not match with upper code this will be executed
app.use((req,res)=>{
    res.send("Page not found!");
});

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});
