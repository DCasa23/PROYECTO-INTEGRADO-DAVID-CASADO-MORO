const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const testSchema = new Schema({
    correo: String,
    duracion: Number,
    pregunta: String,
    respuesta: String,
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Test = mongoose.model("Test", testSchema, "test");

module.exports = Test;