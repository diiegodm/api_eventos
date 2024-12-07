const jwt = require("jsonwebtoken");
const Users = require("../models/users.models");




// vaslidar los datos del usuario en especial el token 
const checkToken = async (req, res, next) => {

    if (!req.headers["authorization"]) {
        return res.json({ msg: "debe incluir el token" })
    }
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);



    let data;
    try {
    
        data = jwt.verify(token, process.env.PASSW);
    } catch (error) {
        return res.json({ msg: " el token es incorrecto" })
    }
    // buscar el la base de datos--
    const user = await Users.findById(data.user_id)

    if (!user) {
        return res.json({ msg: " el usuario no existe " })
    }

    req.user = user;
    next();


};


const checkRole = async (req,res,next) =>{
    
    if (!req.headers["authorization"]) {
        return res.json({ msg: "debe incluir el token" })
    }
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);


    let data;
    try {
    
        data = jwt.verify(token, process.env.PASSW);
    } catch (error) {
        return res.json({ msg: " el token es incorrecto" })
    }
    // buscar el la base de datos--
    const user = await Users.findById(data.user_id)

    if (!user) {
        return res.json({ msg: " el usuario no existe " })
    }

 
    if (user.role !== 1) { //verificamos el roll del usuario ya que los definimos como 0 para usuarios y 1 para admins
        return res.json({ msg: " el usuariono es admin " })
    }

    req.user = user;



    next();


};





module.exports = { checkToken , checkRole };