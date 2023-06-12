const Usuario = require("../models/user");
const bcryptjs = require('bcryptjs');

exports.login = (req, res) => {
    req.session.cuenta = undefined;
    res.render("inicio", { tituloWeb: "Inicio de sesión", error: false });
};

exports.user_login_post = async (req, res) => {
    // Recuperación de los datos introducidos en el login mediante body-parser
    let body = req.body;
    try {
       // const passwordSuccess = bcryptjs.compareSync(password,row[0.password)
       
        let usuarioEncontrado = await Usuario.findOne({ correo: `${body.correo}` });
        if (usuarioEncontrado !== null && bcryptjs.compareSync(body.password,usuarioEncontrado.password,)) {
            req.session.cuenta = usuarioEncontrado;
            res.redirect("/");
        } else {
            res.render("inicio", { tituloWeb: "Inicio de sesión fallido", error: true });
        }
    } catch (error) {
        console.log(error);
    }
};