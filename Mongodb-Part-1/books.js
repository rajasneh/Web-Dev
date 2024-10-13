const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    }, 
    price:{
        type:String,
    },
    discount:{       //Schema type option
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
});

const book =mongoose.model("book",bookSchema);

let book1=new book({
    title:"Marvel Comics",
    price:799,
    category:"fiction",
    genre:["superheroes","drama","comics"]
});

book1.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})