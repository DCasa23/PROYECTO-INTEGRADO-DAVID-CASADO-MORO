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
exports.tarjetas_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const tarjetasDB = await Tarjetas.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(tarjetasDB) //Para probarlo por consola
        res.render('ejertarjetas', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            tarjetas: tarjetasDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejertarjetas', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
exports.tarjetas_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const tarjetasDB = await Tarjetas.findByIdAndDelete({ _id: id });
        if (!tarjetasDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar el Pokémon.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Pokémon eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
}





