const Usuario = require("../models/user");

exports.perfil = (req, res) => {
    res.render("perfil", { tituloWeb: "Perfil de usuario",usuario: req.session.cuenta});
};

