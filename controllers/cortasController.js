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
exports.cortas_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const cortasDB = await Cortas.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(cortasDB) //Para probarlo por consola
        res.render('ejercortas', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            cortas: cortasDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejercortas', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};





