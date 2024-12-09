const jwt = require("jsonwebtoken");
const Users = require("../models/users.models");




// vaslidar los datos del usuario en especial el token 
const checkToken = async (req, res, next) => {

    if (!req.headers["authorization"]) {
        return res.status(400).json({ msg: "debe incluir el token" })
    }
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);

    
    let data;

    try {
        data = jwt.verify(token, process.env.PASSW);
        console.log("Datos decodificados del token:", data);

    } catch (error) {
        return res.status(400).json({ msg: "El token es incorrecto o expiró" });
    }

    const user = await Users.findById(data.user_id);
    if (!user) {
        console.log("No se encontró un usuario con el ID:", data.user_id);
        return res.status(400).json({ msg: "El token es incorrecto o expiró" });
    }

    req.user = user;
    next();
};






const checkRole = async (req,res,next) =>{
    
    if (!req.headers["authorization"]) {
        return res.status(400).json({ msg: "debe incluir el token" })
    }
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);


    let data;
    try {
    
        data = jwt.verify(token, process.env.PASSW);
    } catch (error) {
        return res.status(400).json({ msg: " el token es incorrecto" })
    }
    // buscar el la base de datos--
    const user = await Users.findById(data.user_id)

    if (!user) {
        return res.status(400).json({ msg: " el usuario no existe " })
    }

 
    if (user.role !== 1) { //verificamos el roll del usuario ya que los definimos como 0 para usuarios y 1 para admins
        return res.status(403).json({ msg: " el usuariono es admin " })
    }

    req.user = user;



    next();


};





module.exports = { checkToken , checkRole };