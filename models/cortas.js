const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const cortasSchema = new Schema({
    preguntaprimera: String,
    respuestaprimera: String,
    preguntasegunda: String,
    respuestasegunda: String,
    preguntatercera: String,
    respuestatercera: String,
});

// Creación del modelo
const Cortas = mongoose.model("Cortas", cortasSchema, "cortas");

module.exports = Cortas;