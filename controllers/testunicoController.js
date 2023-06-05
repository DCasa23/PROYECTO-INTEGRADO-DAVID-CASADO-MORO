const Testunico = require("../models/testunico");
const Testunico2 = require("../models/testunico2");

exports.testunico = async (req, res) => {
    try {
        const arrayTestunico = await Testunico.find();
        res.render('testunico', { tituloWeb: "Lista de Testunico", arrayTestunico: arrayTestunico, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.testunico_create_project = async (req, res) => {
   
        
        res.render("creartestunico", { tituloWeb: "Crear nuevo proyecto", error: false, success: false , usuario: req.session.cuenta });
  
};
exports.testunico_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     const body = req.body;
    
    try {
        if (body.tema != "") {
            const nuevaTestunico = new Testunico(body);
            console.log("ENTRO")
            await nuevaTestunico.save();
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("creartestunico", { tituloWeb: "Publicar Testunico", error: true, success: false });
        }
    } catch (error) {
        console.log(error);
        
    }
};
exports.testunico_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const testunicoDB = await Testunico.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(testunicoDB) //Para probarlo por consola
        res.render('ejertestunico', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            testunico: testunicoDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejertestunico', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};
exports.testunico_develope_project_post = async (req, res) => {// Recuperamos los datos del formulario
    let body = req.body;
    console.log("YASADASD")
   try {
       if (body.respuesta != "") {
           console.log("ENTRAMOS")
           let nuevaTestunico2 = new Testunico2(body);
           await nuevaTestunico2.save();
           res.render("ejertestunico", { tituloWeb: "Publicar Testunico", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejertestunico", { tituloWeb: "Publicar Testunico", error: true, success: false });
       }
   } catch (error) {
       console.log("ENTRAMOSnoooooo")
       console.log(error);
   }
};






