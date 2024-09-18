const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});

app.use((req,res)=>{
    console.log("New incoming request");
})