

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
const userSchema = new Schema(
    {
        name:{ type:String,require: true },
        username : {type:String, require: true, unique: true},
        password: { type:String,require: true },
        evento: { type:String,require: true},
        role:{type:Number, default: 0}// o user  1 = admind
    }, {
        collection: "users",
        timestamps: true
    }  
);       
 
const Users = mongoose.model("users", userSchema);

module.exports = Users;  