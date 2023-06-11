const Mensaje = require("../models/mensaje");


exports.mensaje = async (req, res) => {
    try {
        const arrayMensaje = await Mensaje.find();
        res.render('mensajes', { tituloWeb: "Lista de Mensaje", arrayMensaje: arrayMensaje, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.mensaje_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const mensajeDB = await Mensaje.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(mensajeDB) //Para probarlo por consola
        res.render('leermensaje', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            mensaje: mensajeDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('leermensaje', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Mensaje no encontrado!',usuario: req.session.cuenta
        })
    }
};

exports.mensaje_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const mensajeDB = await Mensaje.findByIdAndDelete({ _id: id });
        if (!mensajeDB) {
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

