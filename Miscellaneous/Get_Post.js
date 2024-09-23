const express=require("express");
const app=express();
let port=3000;


//Handling post req
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(port,()=>{
    console.log("Listening on port");
});
app.get("/register",(req,res)=>{
    res.send("Standard Get request");
});
app.post("/register",(req,res)=>{
    //Handling post req
    let {user,password}=req.body;
    res.send(`Standard post response.Hello ${user}`);
});
