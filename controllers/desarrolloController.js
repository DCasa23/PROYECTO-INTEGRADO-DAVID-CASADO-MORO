const Desarrollo = require("../models/desarrollo");


exports.desarrollo = async (req, res) => {
    try {
        let arrayDesarrollo = await Desarrollo.find();
        res.render('desarrollo', { tituloWeb: "Lista de Desarrollo", arrayDesarrollo: arrayDesarrollo, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.desarrollo_create_project = async (req, res) => {
   
        
        res.render("creardesarrollo", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
exports.desarrollo_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     console.log("YASADASD")
    try {
        if (body.tema != "" && body.pregunta != "") {
            console.log("ENTRAMOS")
            let nuevaDesarrollo = new Desarrollo(body);
            await nuevaDesarrollo.save();
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: true, success: false });
        }
    } catch (error) {
        console.log("ENTRAMOSnoooooo")
        console.log(error);
    }
};






