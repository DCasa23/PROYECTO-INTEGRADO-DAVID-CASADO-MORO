const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const tarjetasSchema = new Schema({
    correo: String,
    duracion: Number,
    pregunta: String,
    respuesta: String,
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Tarjetas = mongoose.model("Tarjetas", tarjetasSchema, "tarjetas");

module.exports = Tarjetas;