const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const desarrolloSchema = new Schema({
    correo: String,
    duracion: Number,
    pregunta: String,
    respuesta: String,
    nota: Number,
    comentario: String,
    
});

// Creación del modelo
const Desarrollo = mongoose.model("Desarrollo", desarrolloSchema, "desarrollo");

module.exports = Desarrollo;