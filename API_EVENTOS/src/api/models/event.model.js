

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
  
const userSchema = new Schema(
    {
        nombre:{ type:String, require: true, unique: true},
        descripcion: { type:String, require: true},
        fecha:{ type:Date, require: true },
        ubicacion: { type:String,require: true},
        tipoDeporte: {type:String,require: true},
        organizador: { type:String,require: true}
      }, {
        collection: "events",
        timestamps: true
    }
);

const events = mongoose.model("events", userSchema);

module.exports = events;   