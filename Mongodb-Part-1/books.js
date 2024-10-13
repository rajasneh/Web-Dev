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
});

const book =mongoose.model("book",bookSchema);

let book1=new book({
    title:"How to kill a Mockingbird",
    author:"HArper Lee",
    price:900,
});

// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })