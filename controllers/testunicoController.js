const Testunico = require("../models/testunico");


exports.testunico = async (req, res) => {
    try {
        const arrayTestunico = await Testunico.find();
        res.render('testunico', { tituloWeb: "Lista de Testunico", arrayTestunico: arrayTestunico, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.testunico_create_project = async (req, res) => {
   
        
        res.render("creartestunico", { tituloWeb: "Crear nuevo proyecto", error: false, success: false , usuario: req.session.cuenta });
  
};
exports.testunico_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     const body = req.body;
    
    try {
        if (body.tema != "") {
            const nuevaTestunico = new Testunico(body);
            console.log("ENTRO")
            await nuevaTestunico.save();
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
        
    }
};






