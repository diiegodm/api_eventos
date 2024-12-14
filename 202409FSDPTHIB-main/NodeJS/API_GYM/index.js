const express = require('express');
require('dotenv').config(); //configuro mi servidor para usar variable de entorno

const router = require('./src/api/routers/api.router');

const server = express();
server.use(express.json());

const PORT = process.env.PORT;
// configuracion rutas
server.use('/', router);
server.listen(PORT, () => {
  console.log(`server running port http://localhost:${PORT}`);
});

module.exports = server;
