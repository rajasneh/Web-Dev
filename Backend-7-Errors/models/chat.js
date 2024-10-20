const mongoose = require('mongoose');


const chatSchema=mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String
    },
    msg:{
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date
    }
});

const Chat=mongoose.model("Chat",chatSchema);

module.exports=Chat;