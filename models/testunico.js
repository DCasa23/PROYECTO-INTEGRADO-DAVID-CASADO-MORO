const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const testunicoSchema = new Schema({
    correo: String,
    duracion: Number,
    tema: String,
    pregunta: [String],
    respuesta: [String],
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Testunico = mongoose.model("Testunico", testunicoSchema, "testunico");

module.exports = Testunico;