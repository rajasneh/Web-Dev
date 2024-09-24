const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"asnehraj",
        content:"I love gaming"
    },
    {
        username:"jellySinghi",
        content:"I love to watch movies",
    },
    {
        username:"amardeepverma",
        content:"I love coding",
    }

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.listen(port,()=>{
    console.log("Listening on port");
})