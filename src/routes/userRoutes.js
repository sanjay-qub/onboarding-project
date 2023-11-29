const express=require('express');
const router = express.Router();
const userContoller=require("../controllers/userController")

router.post("/saveResult",userContoller.saveResult)
router.get("/get",userContoller.findAll)

module.exports=router;