var express = require('express');
var router = express.Router();

// Require de los controladores de users
const mensajesController = require("../controllers/mensajesController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("mensajes", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});


/* GET home page. */
router.get('/', mensajesController.mensaje);

router.get('/:id', mensajesController.mensaje_develope_project);

router.delete('/:id', mensajesController.mensaje_delete);



module.exports = router;
