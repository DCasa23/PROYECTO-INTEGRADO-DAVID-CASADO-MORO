const express = require("express");
const router = express.Router();

// Require de los controladores de register
const perfilController = require("../controllers/perfilController");

// Comprueba que tiene iniciada sesión
router.get("/*", (req, res, next) => {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
    if (!req.session.cuenta) {
        res.render("login", { tituloWeb: "Inicio de sesión", error: false, success: false });
    } else {
        next();
    }
});

// GET de la página register
router.get('/', perfilController.perfil);

router.get('/perfil/editarperfil', perfilController.users_edit_get);

router.put('/perfil/editarperfil',  perfilController.users_edit_put);

router.delete('/perfil/editarperfil',  perfilController.users_edit_delete);



module.exports = router;