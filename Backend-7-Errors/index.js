const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js");
const { nextTick } = require("process");

app.set("viewa",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"Send me your exam sheet",
//     created_at:new Date(),
// });

// chat1.save()
// .then((res)=>{
//     console.log(res);
// });


//index route
app.get("/chats",async (req,res,next)=>{
    try{
        let chats=await Chat.find();
         console.log(chats);
         res.render("index.ejs",{chats});
    }catch(err){
        next(err);
    }
    
});


//new route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});


//create route
app.post("/chats",async (req,res,next)=>{
    try{
        let {from, to, msg}=req.body;
    let newChat=new Chat({
        from: from,
        to :to,
        msg:msg,
        created_at:new Date(),
    })
    await newChat.save()
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

//NEW-------->Show route
app.get("/chats/:id",async (req,res,next)=>{
    try{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404,"Chat not found")); // Handling Async Errors
        }
        res.render("edit.ejs",{chat});
    }catch(err){
        next(err);
    }
  
})

//edit route
app.get("/chats/:id/edit",async (req,res,next)=>{
    try{
        let {id}=req.params;
        let chat=await Chat.findById(id);
        res.render("edit.ejs",{chat});
    }catch(err){
        next(err);
    }
});

//update route
app.put("/chats/:id",async (req,res,next)=>{
   try{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true},
    );
    console.log(updatedChat);
    res.redirect("/chats");
   }catch(err){
        next(err);
   }
});

//delete route
app.delete("/chats/:id",async (req,res,next)=>{
   try{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
   }catch(err){
     next(err);
   }
});

app.get("/",(req,res)=>{
    res.send("root is working");
});

app.use((err,req,res,next)=>{
    let{status=500,message="Some error occurred"}=err;
    res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log("Server is listening on 8080");
});