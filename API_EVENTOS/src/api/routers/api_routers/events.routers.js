


const express = require('express');
const {getEvents,addEvent,eventUni,evendelete,update} = require("../../controlles/event.contollers");
const {checkToken,checkRole} = require("../../middelware/auth")
const router = express.Router();


router.get("/", getEvents)
router.get("/:id",eventUni)
router.post("/",checkToken,checkRole, addEvent)
router.put("/:id",checkToken,checkRole,update)
router.delete("/:id",checkToken,checkRole, evendelete)

module.exports = router;             