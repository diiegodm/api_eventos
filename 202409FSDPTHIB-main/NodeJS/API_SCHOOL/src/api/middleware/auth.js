const jwt = require('jsonwebtoken');
const Users = require('../models/user.model');

const checkToken = async (req, res, next) => {
  //validar que el token que me envias es correcto
  if (!req.headers['authorization']) {
    return res.json({ msg: 'debe  incluir el token ' });
  }
  const token = req.headers['authorization'];
  // "Bearer fdgshjdkflsghñjklhgfdgdhjklñjhgfddsfghjklk"
  console.log(token);

  let data;
  try {
    const tokenVe = token.split(' ')[1];
    data = jwt.verify(tokenVe, process.env.SECRET_KEY_JWT);
  } catch (error) {
    return res.json({ msg: 'el token es incorrecto' });
  }
  // buscar en la BD el usario del token
  const user = await Users.findById(data.user_id);
  if (!user) {
    return res.json({ msg: 'el usuario no existe' });
  }
  //envio los datos del usuario al controlador
  req.user = user;
  next();
};
module.exports = { checkToken };
