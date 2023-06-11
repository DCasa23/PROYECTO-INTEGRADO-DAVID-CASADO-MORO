const Desarrollo = require("../models/desarrollo");
const Desarrollo2 = require("../models/desarrollo2");

exports.desarrollo = async (req, res) => {
    try {
        let arrayDesarrollo = await Desarrollo.find();
        res.render('desarrollo', { tituloWeb: "Lista de Desarrollo", arrayDesarrollo: arrayDesarrollo, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.desarrollo_create_project = async (req, res) => {
   
        
        res.render("creardesarrollo", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
exports.desarrollo_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     console.log("YASADASD")
    try {
        if (body.tema != "" && body.pregunta != "") {
            console.log("ENTRAMOS")
            let nuevaDesarrollo = new Desarrollo(body);
            await nuevaDesarrollo.save();
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creardesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
        }
    } catch (error) {
        console.log("ENTRAMOSnoooooo")
        console.log(error);
    }
};
exports.desarrollo_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const desarrolloDB = await Desarrollo.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(desarrolloDB) //Para probarlo por consola
        res.render('ejerdesarrollo', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            desarrollo: desarrolloDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejerdesarrollo', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
exports.desarrollo_develope_project_post = async (req, res) => {// Recuperamos los datos del formulario
    let body = req.body;
    console.log("YASADASD")
   try {
       if (body.respuesta != "") {
           console.log("ENTRAMOS")
           let nuevaDesarrollo2 = new Desarrollo2(body);
           await nuevaDesarrollo2.save();
           res.render("ejerdesarrollo", { tituloWeb: "Publicar Desarrollo", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejerdesarrollo", { tituloWeb: "Publicar Desarrollo", error: true, success: false });
       }
   } catch (error) {
       console.log("ENTRAMOSnoooooo")
       console.log(error);
   }
};
exports.desarrollo_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const desarrolloDB = await Desarrollo.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(desarrolloDB)
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





exports.desarrollo_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const desarrolloDB = await Desarrollo.findByIdAndDelete({ _id: id });
        if (!desarrolloDB) {
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

