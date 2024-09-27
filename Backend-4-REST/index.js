const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4} = require('uuid');

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"asnehraj",
        content:"I love gaming"
    },
    {
        id:uuidv4(),
        username:"jellySinghi",
        content:"I love to watch movies",
    },
    {
        id:uuidv4(),
        username:"amardeepverma",
        content:"I love coding",
    }

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port,()=>{
    console.log("Listening on port");
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>p.id===id)
    res.render("show.ejs",{post});
});