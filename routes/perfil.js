const express = require("express");
const router = express.Router();

// Require de los controladores de register
const perfilController = require("../controllers/perfilController");

// Comprueba que tiene iniciada sesión
router.get("/*", (req, res, next) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
    if (!req.session.cuenta) {
        res.render("perfil", { tituloWeb: "Inicio de sesión", error: false, success: false });
    } else {
        next();
    }
});

// GET de la página register
router.get("/", perfilController.perfil);



module.exports = router;