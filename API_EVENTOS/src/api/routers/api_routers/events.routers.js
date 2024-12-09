


const express = require('express');
const {getEvents,addEvent,eventUni,evendelete,update, getBydata} = require("../../controlles/event.contollers");
const {checkToken,checkRole} = require("../../middelware/auth")
const router = express.Router();

router.get("/buscar", getBydata)
router.get("/", getEvents) 
router.get("/:id",eventUni)
router.post("/add",checkToken,checkRole, addEvent)
router.put("/:id",checkToken,checkRole,update)
router.delete("/:id",checkToken,checkRole, evendelete)






module.exports = router;              