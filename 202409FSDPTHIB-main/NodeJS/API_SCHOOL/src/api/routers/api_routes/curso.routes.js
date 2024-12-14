const express = require('express');
const router = express.Router();
const { add, updateCurso, deleteCurso, getByName, addUser, getAll, updateUser, getAllName } = require('../../controllers/curso.controller');

router.post('/add', add);
router.put("/update/:id", updateCurso);
router.delete("/delete/:id", deleteCurso);
router.get("/getByName", getByName)
router.put("/adduser/:idC/:idU", addUser)
router.get("/getall", getAll);
router.put("/updateUser", updateUser)
router.get("/get", getAllName)


module.exports = router;

/* post, get, put, delete */