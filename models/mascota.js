const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estructura del insert por asi decirlo
const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo
const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;