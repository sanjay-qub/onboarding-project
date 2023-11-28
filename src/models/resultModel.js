const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema({
    name:{
        type:String,
     
    },
    email:{
        type:String,
      
    },
    category:{
        type:String,

    }
    ,
    score:{
        type:String,

    },
    grade:{
        type:String,

    }
    
})

const resultModel= new mongoose.model('result',resultSchema);
module.exports=resultModel;