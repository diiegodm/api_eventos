const bcrypt = require('bcryptjs');
const Users = require('../models/user.model');
const { createToken } = require('../../utils/jwt');

const addUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = new Users(data);
    const createdUser = await newUser.save();
    return res.json({ message: 'usuario creado', data: createdUser });
  } catch (error) {
    console.log(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const listUsers = await Users.find();
    res.json({ success: true, list: listUsers });
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    // recibo los datos
    const newUser = req.body;
    //valido si el usuario ya existe en la BD
    const userDB = await Users.find({ email: newUser.email });
    // si existe envio error de respuesta

    if (userDB.length !== 0) {
      return res.json({ message: 'El email ya  esta registrado' });
    }
    // sino existe --> encripto la contreseña y lo añado
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const user = await Users.create(newUser);
    /* const user = new Users(newUser)
     const createduser = await user.save()*/
    return res.json(user);
  } catch (error) {}
};
const login = async (req, res) => {
  try {
    //recibo los datos
    const { email, password } = req.body;
    //verificar que el email existe findOne
    //const userDB = await Users.findOne({ email: req.body.email })
    const userDB = await Users.findOne({ email });

    if (!userDB) {
      return res.json({ message: 'el email no existe' });
    }
    //comparar la contraseña del usuario con la de la BD  bcrypt.compare()
    const same = await bcrypt.compare(password, userDB.password);

    //no coinciden la contraseña envio mensaje de  error
    if (!same) {
      return res.json({ message: 'Contraseña incorrecta' });
    }
    //si coinciden creo el token
    return res.json({
      message: 'Login exitoso',
      token: createToken(userDB),
    });
  } catch (error) {}
};
//perfilUsuario
const getProfile = async (req, res) => {
  //req.user
  //busco en la BD la informacion que me interesa de ese usuario
  const dataUser = await Users.findById({ email: req.user.email });
  return res.json(dataUser);
};
const registerUpload = async (req, res) => {
  const newUser = new Users(req.body);
  console.log(req.files);
  if (req.file.path) {
    newUser.image = req.file.path;
  }
  const createdUser = await newUser.save();
  return res.json(createdUser);
};
module.exports = {
  addUser,
  getUsers,
  register,
  login,
  getProfile,
  registerUpload,
};
