
const Testunico2 = require("../models/testunico2");

exports.testunico = async (req, res) => {
    try {
        let arrayTestunico2 = await Testunico2.find();
        res.render('tareastestunico', { tituloWeb: "Lista de Testunico2", arrayTestunico2: arrayTestunico2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};



exports.testunico_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const testunico2DB = await Testunico2.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(testunico2DB) //Para probarlo por consola
        res.render('resultadotestunico', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            testunico2: testunico2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('resultadotestunico', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};





