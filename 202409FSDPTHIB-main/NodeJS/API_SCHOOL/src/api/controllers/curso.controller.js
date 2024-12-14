const Curso = require("../models/curso.model")

const add = async (req, res) => {

    //json 
    const newCurso = new Curso(req.body)
    const createdCurso = await newCurso.save()
    return res.json(createdCurso)
}
const updateCurso = async (req, res) => {
    const id = req.params.id;
    const curso = req.body;

    try {
        const newCurso = await Curso.findByIdAndUpdate(id, curso, { new: true })
        return res.json(newCurso)

    } catch (error) {

    }
}
const deleteCurso = async (req, res) => {
    try {
        const deleteCurso = await Curso.findByIdAndDelete(req.params.id);
        return res.json(deleteCurso)
    } catch (error) {

    }
}
const getByName = async (req, res) => {
    try {
        const nameCurso = req.body.name;
        const data = await Curso.find({ name: nameCurso })
        return res.json(data)
    } catch (error) {
    }
}

const addUser = async (req, res) => {
    const idCurso = req.params.idC;
    const idUser = req.params.idU
    const findCurso = await Curso.findById(idCurso)
    if (!findCurso) {
        return res.json({ msg: "no existe el curso" })
    }
    if (findCurso.users.includes(idUser)) {
        return res.json({ msg: "El usuario ya existe" })
    }
    findCurso.users.push(idUser)
    const newUser = await findCurso.save();

    return res.json({ msg: "Modificado con exito", data: newUser })
}
const getAll = async (req, res) => {
    try {
        const list = await Curso.find().populate("users", "name email")
        return res.json(list)
    } catch (error) {

    }
}
// http://localhost:3500/curso/updateUser?idU=valor&idC=valor 
//id, paginaciones, limites
const updateUser = async (req, res) => {
    try {
        /*
            const idc = req.query.idc;
            const idu = req.query.idu;
        */
        const { idc, idu } = req.query;
        const cursoUpdate = await Curso.findByIdAndUpdate(idc, { $pull: { users: idu } }, { new: true })
        return res.json(cursoUpdate)

    } catch (error) {

    }
}

const getAllName = async (req, res) => {
    try {
        const nameCurso = req.body.name;
        const data = await Curso.find({
            name: { $regex: nameCurso, $options: "i" }
        })
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { add, updateCurso, deleteCurso, getByName, addUser, getAll, updateUser, getAllName }