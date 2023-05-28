
const Cortas2 = require("../models/cortas2");

exports.cortas = async (req, res) => {
    try {
        let arrayCortas2 = await Cortas2.find();
        res.render('tareascortas', { tituloWeb: "Lista de Cortas2", arrayCortas2: arrayCortas2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};



exports.cortas_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const cortas2DB = await Cortas2.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(cortas2DB) //Para probarlo por consola
        res.render('resultadocortas', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            cortas2: cortas2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('resultadocortas', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};





