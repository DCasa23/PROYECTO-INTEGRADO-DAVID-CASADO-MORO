const Tarjetas = require("../models/tarjetas");


exports.tarjetas = async (req, res) => {
    try {
        let arrayTarjetas = await Tarjetas.find();
        res.render('tarjetas', { tituloWeb: "Lista de Tarjetas", arrayTarjetas: arrayTarjetas, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.tarjetas_create_project = async (req, res) => {
   
        
        res.render("creartarjetas", { tituloWeb: "Crear nuevo proyecto", error: false, success: false, usuario: req.session.cuenta });
  
};
exports.tarjetas_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
    
    try {
        if (body.tema != "" && body.pregunta1 != "") {
            let nuevaTarjetas = new Tarjetas(body);
            await nuevaTarjetas.save();
            res.render("creartarjetas", { tituloWeb: "Publicar Tarjetas", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creartarjetas", { tituloWeb: "Publicar Tarjetas", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};






