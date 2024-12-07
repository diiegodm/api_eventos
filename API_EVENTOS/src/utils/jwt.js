


const jwt = require("jsonwebtoken")

const createToken = (info) => {

    const data = {
        user_id: info._id,
        user: info.username,
        role: info.role
    }
    return jwt.sign(data, process.env.PASSW)

}





module.exports = { createToken  } 