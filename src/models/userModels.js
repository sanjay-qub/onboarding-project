const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Id:{
        type:String,
        required:[true,'id is required']
    },
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:true
    }
})

const userModel= new mongoose.model('users',userSchema);
module.exports=userModel;