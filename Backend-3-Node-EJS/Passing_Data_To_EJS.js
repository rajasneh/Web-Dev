//Roll Dice
let express=require("express");
let app=express();
let port=3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.get("/",(req,res)=>{
    let data=Math.floor(Math.random()*6)+1;  //Assuming that this data is comming from database
    res.render("Roll_Dice.ejs",{data});//data will be directly accessable to ejs file
});