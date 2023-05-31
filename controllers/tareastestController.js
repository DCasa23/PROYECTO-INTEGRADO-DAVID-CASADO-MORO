
const Test2 = require("../models/test2");

exports.test = async (req, res) => {
    try {
        let arrayTest2 = await Test2.find();
        res.render('tareastest', { tituloWeb: "Lista de Test2", arrayTest2: arrayTest2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};



exports.test_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const test2DB = await Test2.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(test2DB) //Para probarlo por consola
        res.render('resultadotest', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            test2: test2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('resultadotest', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};





