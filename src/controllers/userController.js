const { Email } = require("@mui/icons-material");
const userModel=require("../models/userModels")

const {v4 : uuidv4} = require('uuid');

const resultModel = require('../models/resultModel');



exports.findAll=async(req,res)=>{
    
       try{
        let user=await resultModel.find();
       if(user){
   
        return res.status(200).json({success:true,user})

        }

        else{
            return res.status(404).json({ success: false, message: "User not found" });
        }
 
       
    } catch (error) {

        console.error("Error creating user:", error);
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}




exports.saveResult = async (req, res) => {
  const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Kolkata', // Set the time zone to IST
};

const istFormattedDate = currentDate.toLocaleString('en-IN', options);

    console.log("saveresult called ")
  try {
   
    const { user, category, score, grade } = req.body;

    const resultData = {
        name:user.name,
        email:user.email,
        category,
        score,
        grade,
        istFormattedDate
     };


    const savedResult = await resultModel.create(resultData);


    return res.status(200).json({
      success: true,
      message: 'Result saved successfully',
      data: savedResult,
    });
  } catch (error) {
   
    console.error('Error saving result:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};
