const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const cortasSchema = new Schema({
    correo: String,
    duracion: Number,
    pregunta: String,
    respuesta: String,
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Cortas = mongoose.model("Cortas", cortasSchema, "cortas");

module.exports = Cortas;