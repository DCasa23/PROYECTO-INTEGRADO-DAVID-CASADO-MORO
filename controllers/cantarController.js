const Cantar = require("../models/cantar");
const Cantar2 = require("../models/cantar2");

exports.cantar = async (req, res) => {
    try {
        let arrayCantar = await Cantar.find();
        res.render('cantar', { tituloWeb: "Lista de Cantar", arrayCantar: arrayCantar, usuario: req.session.cuenta });
    } catch (error) {
        console.log(error);
    }
};

exports.cantar_create_project = async (req, res) => {
   
        
        res.render("crearcantar", { tituloWeb: "Crear nuevo proyecto", error: false, success: false,usuario: req.session.cuenta });
  
};
exports.cantar_create_project_post = async (req, res) => {// Recuperamos los datos del formulario
     let body = req.body;
     console.log("YASADASD")
    try {
        if (body.area != "" && body.tema != "") {
            console.log("ENTRAMOS")
            let nuevaCantar = new Cantar(body);
            await nuevaCantar.save();
            res.render("crearcantar", { tituloWeb: "Publicar Cantar", error: false, success: true });
            res.redirect("/");
        } else {
            res.render("crearcantar", { tituloWeb: "Publicar Cantar", error: true, success: false });
        }
    } catch (error) {
        console.log("ENTRAMOSnoooooo")
        console.log(error);
    }
};

exports.cantar_develope_project = async (req, res) => {
    const id = req.params.id //Recordemos que en la plantilla "gimnasio.ejs" le pusimos
    //a este campo gimnasio.id, por eso lo llamados con params.id
    try {
        const cantarDB = await Cantar.findOne({ _id: id }) //_id porque así lo indica Mongo
							//Esta variable “Gimnasio” está definida arriba con el “require”
        //Buscamos con Mongoose un único documento que coincida con el id indicado
        console.log(cantarDB) //Para probarlo por consola
        res.render('ejercantar', { //Para mostrar el objeto en la vista "detalle", que tenemos que crear
            cantar: cantarDB,
            error: false, usuario: req.session.cuenta
        })
    } catch (error) { //Si el id indicado no se encuentra
        console.log('Se ha producido un error', error)
        res.render('ejercantar', { //Mostraremos el error en la vista "detalle"
            error: true,
            mensaje: 'Corta no encontrado!',usuario: req.session.cuenta
        })
    }
};

exports.cantar_develope_project_post = async (req, res) => {// Recuperamos los datos del formulario
    let body = req.body;
    console.log("YASADASD")
   try {
       if (body.tema != "") {
           console.log("ENTRAMOS")
           let nuevaCantar2 = new Cantar2(body);
           await nuevaCantar2.save();
           res.render("ejercantar", { tituloWeb: "Publicar Cantar", error: false, success: true });
           res.redirect("/");
       } else {
           res.render("ejercantar", { tituloWeb: "Publicar Cantar", error: true, success: false });
       }
   } catch (error) {
       console.log("ENTRAMOSnoooooo")
       console.log(error);
   }
};




