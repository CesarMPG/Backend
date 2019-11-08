const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    pnombre: { type:String,required: true},
    apellido: { type:String,required: true},
    edad: { type:Number,required: true},
    direccion: { type:String,required: true}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);