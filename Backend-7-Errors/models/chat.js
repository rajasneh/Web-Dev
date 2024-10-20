const mongoose = require('mongoose');


const chatSchema=mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength:50,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    }
});

const Chat=mongoose.model("Chat",chatSchema);

module.exports=Chat;