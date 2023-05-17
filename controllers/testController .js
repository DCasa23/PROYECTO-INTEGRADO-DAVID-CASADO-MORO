const Test = require("../models/test");

exports.test = async (req, res) => {
    try {
        const arrayTest = await Test.find();
        res.render('test', { tituloWeb: "Lista de Test", arrayTest: arrayTest, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.test_create_project = async (req, res) => {
   
        
        res.render("creartest", { tituloWeb: "Crear nuevo proyecto", error: false, success: false });
  
};
exports.test_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     const body = req.body;
    
    try {
        if (body.titulo != "" && body.descripcion != "") {
            const nuevaTest = new Test(body);
            await nuevaTest.save();
            res.render("creartest", { tituloWeb: "Publicar Test", error: false, success: true });
        } else {
            res.render("creartest", { tituloWeb: "Publicar Test", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
    }
};






