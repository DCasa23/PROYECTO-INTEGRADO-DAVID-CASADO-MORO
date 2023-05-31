const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const test2Schema = new Schema({
    correo: String,
    duracion: Number,
    tema: String,
    pregunta: [String],
    respuesta: [String],
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Test2 = mongoose.model("Test2", test2Schema, "test2unico");

module.exports = Test2;