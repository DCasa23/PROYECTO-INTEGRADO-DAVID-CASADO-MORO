const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Declaración del modelo y sus datos
const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    direccion: String,
    ciudad: String,
    password: String,
    telefono: Number,
    dni:String,
    rol: String,
    metodoPago: String,
    grupoPago: String,
    fechaIngreso: Date,
    fechaRenovacion: Date,
    numeroID: String,
});

// Creación del modelo
const Usuario = mongoose.model("Usuario", userSchema, "usuario");

module.exports = Usuario;
