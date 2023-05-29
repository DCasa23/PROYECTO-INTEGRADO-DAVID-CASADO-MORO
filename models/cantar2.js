const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const cantar2Schema = new Schema({
    area: String,
    tema: String,
    duracion: Number,
    archivo: String,
    correoAlumno: String,
});

// Creación del modelo
const Cantar2 = mongoose.model("Cantar2", cantar2Schema, "cantar2");

module.exports = Cantar2;