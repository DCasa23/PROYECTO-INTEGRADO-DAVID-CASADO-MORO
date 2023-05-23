const Cortas = require("../models/cortas");

exports.cortas = async (req, res) => {
    try {
        let arrayCortas = await Cortas.find();
        res.render('cortas', { tituloWeb: "Lista de Cortas", arrayCortas: arrayCortas, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.cortas_create_project = async (req, res) => {
   
        
        res.render("crearcortas", { tituloWeb: "Crear nuevo proyecto", error: false, success: false, usuario: req.session.cuenta});
  
};
exports.cortas_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
    
    try {
        if (body.tema != "" && body.pregunta1 != "") {
            let nuevaCortas = new Cortas(body);
            await nuevaCortas.save();
            res.render("crearcortas", { tituloWeb: "Publicar Cortas", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("crearcortas", { tituloWeb: "Publicar Cortas", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};






