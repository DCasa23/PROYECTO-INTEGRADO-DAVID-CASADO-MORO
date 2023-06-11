const Mensaje = require("../models/mensaje");


/*exports.mensaje = async (req, res) => {
    try {
        let arrayMensaje = await Mensaje.find();
        res.render('mensaje', { tituloWeb: "Lista de Mensaje", arrayMensaje: arrayMensaje, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};
*/
exports.mensaje_create_project = async (req, res) => {
   
        
        res.render("enviarmensaje", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
exports.mensaje_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     console.log("YASADASD")
    try {
        if (body.titulo != "" && body.mensaje != "") {
            console.log("ENTRAMOS")
            let nuevaMensaje = new Mensaje(body);
            await nuevaMensaje.save();
            res.render("enviarmensaje", { tituloWeb: "Publicar Mensaje", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("enviarmensaje", { tituloWeb: "Publicar Mensaje", error: true, success: false });
        }
    } catch (error) {
        console.log("ENTRAMOSnoooooo")
        console.log(error);
    }
};
/*
exports.mensaje_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const mensajeDB = await Mensaje.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(mensajeDB) //Para probarlo por consola
        res.render('ejermensaje', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            mensaje: mensajeDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejermensaje', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
exports.mensaje_develope_project_post = async (req, res) => {// Recuperamos los datos del formulario
    let body = req.body;
    console.log("YASADASD")
   try {
       if (body.respuesta != "") {
           console.log("ENTRAMOS")
           let nuevaMensaje2 = new Mensaje2(body);
           await nuevaMensaje2.save();
           res.render("ejermensaje", { tituloWeb: "Publicar Mensaje", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejermensaje", { tituloWeb: "Publicar Mensaje", error: true, success: false });
       }
   } catch (error) {
       console.log("ENTRAMOSnoooooo")
       console.log(error);
   }
};
exports.mensaje_edit_put = async (req, res) => {
    
    const id = req.params.id;
        const body = req.body;
        console.log(id)
        console.log('body', body)
        try {
            const mensajeDB = await Mensaje.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
            )
            console.log(mensajeDB)
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

*/