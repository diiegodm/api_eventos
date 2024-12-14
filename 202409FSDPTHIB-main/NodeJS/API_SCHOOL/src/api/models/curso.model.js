const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursoSchema = new Schema(
    {
        name: { type: String, require: true },
        level: { type: Number, enum: [1, 2, 3] },
        users: [{ type: Schema.Types.ObjectId, ref: "users" }]
    },
    {
        collection: 'curso',
        timestamps: true, //createdAt, updatedAt
    }
);
const Curso = mongoose.model('curso', cursoSchema);
module.exports = Curso;
