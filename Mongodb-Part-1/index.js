const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
 
const User=mongoose.model("User",userSchema);

const user1=new User({
  name:"Adam",
  email:"adam@yahoo.in",
  age:48
});

const user2=new User({
  name:"Eve",
  email:"eve@yahoo.in",
  age:48
});

// user2
//   .save()
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });



//Find in mongoose
User.find({age:{$gt:47}})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });