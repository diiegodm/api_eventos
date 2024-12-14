const {
  selectAll,
  insertClient,
  selectById,
  selectByName,
  selectByEmail,
  deleteClient,
} = require('../models/client.model');
const bcrypt = require('bcrypt');
const { createToken } = require('../../utils/jwt');
const { checkAdmin } = require('../../utils/middleware');

const getAll = async (req, res) => {
  try {
    const result = await selectAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const createClient = async (req, res) => {
  try {
    //req.body
    const result = await insertClient(req.body);

    if (result === -1) {
      return res.status(400).json({ msg: 'Insercion no se ha realizado' });
    }

    //select * from client where idClient = result
    const clientData = await selectById(result);
    return res.status(201).json({ data: clientData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'error en el servidor', error: error });
  }
};
const getByName = async (req, res) => {
  try {
    const { name } = req.query;
    const data = await selectByName(name);
    //find--> []
    if (data.length === 0) {
      return res.status(404).json({ message: 'no existe el usuario' });
    }
    return res.status(200).json(data);
  } catch (error) {
    // console.log(error)
    return res.status(500).json(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const data = req.body;
    const selectedEmail = await selectByEmail(data.email);
    if (selectedEmail.length !== 0) {
      return res.status(400).json({ message: 'el email ya existe' });
    }
    // guardamos en el objeto la contraseña encriptada
    data.password = await bcrypt.hash(data.password, 10);
    const insertedClient = await insertClient(data); // id del cliente creado

    if (insertedClient === -1) {
      return res.status(400).json({ message: 'NO se realizo el insert' });
    }

    const clientCreated = await selectById(insertedClient);
    return res.status(201).json({ success: true, data: clientCreated });
  } catch (error) {
    return res.status(500).json(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //buscamos al usuario por email
    const emailSelected = await selectByEmail(email);

    if (emailSelected.length === 0) {
      return res.status(404).json({ message: 'El email NO existe' });
    }

    // valido, contraseña con la de la BD
    const same = await bcrypt.compare(password, emailSelected[0].password);
    if (!same) {
      return res.status(400).json({ message: 'La contraseña es incorrecta' });
    }

    return res.status(200).json({ token: createToken(emailSelected[0]) });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    //checkAdmin() === true
    if (checkAdmin(req.user.role)) {
      const result = await deleteClient(req.params.id);
      if (result.affectedRows === 0) {
        return res.status(400).json({ message: 'no pudo eliminarse' });
      }
      return res.status(200).json({ message: 'eliminado con exito' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  getAll,
  createClient,
  getByName,
  registerUser,
  login,
  deleteUser,
};
