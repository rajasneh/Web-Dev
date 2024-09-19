let express=require("express");
let app=express();
let port=3000;
let path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});



app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    console.log(instaData);
    const data=instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data,});
    }else{
        res.render("instagram_Error.ejs")
    }
});