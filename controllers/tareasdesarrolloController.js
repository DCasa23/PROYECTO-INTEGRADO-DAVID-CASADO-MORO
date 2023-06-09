
const Desarrollo2 = require("../models/desarrollo2");

exports.desarrollo = async (req, res) => {
    try {
        let arrayDesarrollo2 = await Desarrollo2.find();
        res.render('tareasdesarrollo', { tituloWeb: "Lista de Desarrollo2", arrayDesarrollo2: arrayDesarrollo2, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};



exports.desarrollo_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const desarrollo2DB = await Desarrollo2.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(desarrollo2DB) //Para probarlo por consola
        res.render('resultadodesarrollo', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            desarrollo2: desarrollo2DB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log("no ha ent")
        console.log('Se ha producido un error', error)
        res.render('resultadodesarrollo', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Desarrollo no encontrado!',usuario: req.session.cuenta
        })
    }
};

/*
exports.desarrollo_edit_get = async (req, res) => {
    const id = req.params.id;
    try {
        const desarrolloEditar = await Desarrollo2.findOne({_id:id});
        res.render("correcciondesarrollo", { tituloWeb: "Editar usuario", desarrolloEditar: desarrolloEditar });
    } catch (error) {
        console.log(error);
    }
};*/
/*
exports.desarrollo_edit_get = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const desarrolloEditar = await Desarrollo2.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(desarrolloEditar) //Para probarlo por consola
        res.render('correcciondesarrollo', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            desarrolloEditar: desarrolloEditar,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log("no ha ent")
        console.log('Se ha producido un error', error)
        res.render('correcciondesarrollo', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Desarrollo no encontrado!',usuario: req.session.cuenta
        })
    }
};
*/
exports.desarrollo_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const desarrollo2DB = await Desarrollo2.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(desarrollo2DB)
            res.json({
                estado: true,
                mensaje: 'Nota Editada'
            })
        } catch (error) {
            
            console.log(error)
            res.json({
                estado: false,
                mensaje: 'Nota no Editada'
            })
        }
    }




