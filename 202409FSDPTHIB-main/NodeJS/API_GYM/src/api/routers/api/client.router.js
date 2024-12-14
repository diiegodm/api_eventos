const router = require('express').Router();
const {
  getAll,
  createClient,
  getByName,
  registerUser,
  login,
  deleteUser,
} = require('../../controllers/client.controller');
const { checkToken } = require('../../../utils/middleware');

router.get('/', getAll);
router.post('/', createClient);
router.get('/getName', getByName);

router.post('/register', registerUser);
router.post('/login', login);
router.delete('/delete/:id', checkToken, deleteUser);
//Para eliminar el cliente solo puede hacerlo un usuario admin

//router.get('/profile/:id', checkToken, profile);

module.exports = router;

// para eliminar el usuario llamamos a la funcion checktokenAdmin
// para el perfil de usuario llamamos a la funcion checktoken
// en el controlador no seria necesario validar el role
