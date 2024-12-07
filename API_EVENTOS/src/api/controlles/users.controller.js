


const bcrypt = require("bcryptjs")
const Users = require('../models/users.models');
const { createToken } = require("../../utils/jwt")


const registrer = async (req, res) => {

  try {
    console.log('endpoint registrer');
    debugger;
    const newUser = req.body;// recibimos los datos desde el body 

    const userDB = await Users.find({ username: newUser.username });// buscamos el username como principal y unico elemento (KEY)
    if (userDB.length !== 0) {

      return res.json({ message: "el usuario ya esta registrado" });// en caso de que el username ya este usado 
    };
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const user = await Users.create(newUser);
console.log (user)
    const data = {
      name: user.name,
      username: user.username,
      evento: user.evento,

    }

    return res.json({ mensaje: "te haz registrado con exito", data })


  } catch (error) {
    return res.json(error)
  }
}

const login = async (req, res) => {
  try {
    //recibo los datos
    const { username, password } = req.body;
    //verificar que el email existe findOne
    //const userDB = await Users.findOne({ email: req.body.email })
    const userDB = await Users.findOne({ username });

    if (!userDB) {
      return res.json({ message: "el eusuario no existe" })
    }
    //comparar la contraseña del usuario con la de la BD  bcrypt.compare()
    const same = await bcrypt.compare(password, userDB.password)

    //no coinciden la contraseña envio mensaje de  error
    if (!same) {
      return res.json({ message: "Contraseña incorrecta" })
    }
    //si coinciden creo el token
    token = createToken(userDB);
    console.log(token)


    // mostrare el token por consaola para no mostrarcelo a usuario 
    return res.json({
      message: " felicidades Login exitoso",
      token: createToken(userDB)

    })

  } catch (error) {
    console.log(error)
  }
}

const deleteuser = async (req, res) => {

  try {
    const deleteUser = await Users.findByIdAndDelete(req.params.id);
   

    if (!deleteUser) {

      return res.json({ mensaje: "el usuario no existe" })
    }

    const Evento = {

      name: deleteUser.name,
      username: deleteUser.username,
      deporte: deleteUser.deporte,
      role: deleteUser.role,
      createdAt: deleteUser.createdAt,
      updatedAt: deleteUser.updatedAt

    }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero

    return res.json({
      mensaje: "usuario eliminado con exito",
      Evento
    })

  } catch (error) {
    console.log(error)
  }

}

const profile = async (req, res) => {


  try {

    const getProfile = await Users.findById(req.params.id);
    console.log(getProfile)
    const Evento = {

      name: getProfile.name,
      username: getProfile.username,
      deporte: getProfile.deporte,
      role: getProfile.role,
      createdAt: getProfile.createdAt,
      updatedAt: getProfile.updatedAt

    }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero)

    return res.json(Evento)



  } catch (error) {
    console.log(error)
  }
}


const update = async (req, res) => {

  const id = req.params.id;
  const upUser = req.body;// guardo la contrasen apara encryptarla

  try {


    if (upUser.password) {// si en la modificacion contiene la contrasena entonces que la encrypte antes de enviarla a la data (eso espero )
      upUser.password = await bcrypt.hash(upUser.password, 10);
    }


        const newUser = await Users.findByIdAndUpdate(id, upUser, { new: true })


        if (!newUser) { // si no encuentra el usuaripo devolvera el error  
          return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }
        const newusermodificado = {
          name: newUser.name,
          username: newUser.username,
          password: upUser.password,
          evento: newUser.evento,
          role: newUser.role,
          updatedA: newUser.updatedA

        }


        return res.json({
          mensaje: "se modifico con exito",
          newusermodificado
        })


      }catch (error) {
        console.log(error)

      }
    }
  



    module.exports = { registrer, login, deleteuser, profile, update } 