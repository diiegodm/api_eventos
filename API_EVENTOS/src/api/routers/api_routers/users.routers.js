

const express = require('express');
const router = express.Router();
const {registrer,login,deleteuser,profile,update } = require('../../controlles/users.controller');
const {checkToken,checkRole} = require("../../middelware/auth")


router.post("/register", registrer);
router.post("/login", login)
router.delete("/deleteuser/:id",checkToken,checkRole,deleteuser)// se supone tien los dos cehkeos 
router.put("/profile/:id",checkToken,checkRole,profile)
router.put("/update/:id",checkToken,checkRole,update) 

    

module.exports = router;     
       