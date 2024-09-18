let express=require("express");
let app=express();

let port=3000;
app.listen(port,()=>{
    console.log("App is listening");
});

app.get("/",(req,res)=>{
    res.send("<h1>Hello! I am root </h1>");
})

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`Welcome to the page of ${username}`);
});
