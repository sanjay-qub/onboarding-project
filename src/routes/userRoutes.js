const express=require('express');
const router = express.Router();
const userContoller=require("../controllers/userController")

// router.post("/create",userContoller.createUser)
// router.put("/edit",userContoller.editUser)
// router.delete("/delete",userContoller.deleteUser)
// router.get("/get",userContoller.findAll)
router.post("/saveResult",userContoller.saveResult)
router.get("/get",userContoller.findAll)

module.exports=router;