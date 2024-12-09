

const express = require('express');
require('dotenv').config(); //configuro mi servidor para usar variable de entorno
const connectDB = require('./src/utils/db.mongo');
const routes = require("./src/api/routers/routes");
connectDB(); 



  
 

const server = express();
server.use(express.json());


server.use("/api",routes)

const PORT = process.env.PORT;  

  

server.listen(PORT, () => {
    console.log(`server running port http://localhost:${PORT}`);
  });                          