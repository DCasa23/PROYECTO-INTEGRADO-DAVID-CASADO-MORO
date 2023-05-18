const Desarrollo = require("../models/desarrollo");


exports.desarrollo = async (req, res) => {
    try {
        const arrayDesarrollo = await Desarrollo.find();
        res.render('desarrollo', { tituloWeb: "Lista de Desarrollo", arrayDesarrollo: arrayDesarrollo, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.desarrollo_create_project = async (req, res) => {
   
        
        res.render("creardesarrollo", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
exports.desarrollo_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     const body = req.body;
    
    try {
        if (body.titulo != "" && body.descripcion != "") {
            const nuevaDesarrollo = new Desarrollo(body);
            await nuevaDesarrollo.save();
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
        } else {
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};






