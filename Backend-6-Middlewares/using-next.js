const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});

app.use((req,res,next)=>{
    console.log("Hello i am 1st miidleware");
    next();
});

app.use((req,res,next)=>{
    console.log("Hello i am 2nd middleware");
    next();
});


app.get("/",(req,res)=>{
    res.send("Hello i am root");
});
app.get("/random",(req,res)=>{
    res.send("Hello this is a random page");
});
