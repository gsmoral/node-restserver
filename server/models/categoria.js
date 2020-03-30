const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripción es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

//Hacemos que el Squema use un plugin en especial
categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser única' });

module.exports = mongoose.model('Categoria', categoriaSchema); // Lo exporto con el nombre 'categoria'