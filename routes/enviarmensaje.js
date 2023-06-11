var express = require('express');
var router = express.Router();

// Require de los controladores de users
const enviarmensajeController = require("../controllers/enviarmensajeController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("enviarmensaje", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});


/* GET home page. */
//router.get('/mensajes', mensajeController.mensaje);

router.get('/', enviarmensajeController.mensaje_create_project);

router.post('/', enviarmensajeController.mensaje_create_project_post);

/*router.get('/:id', mensajeController.mensaje_develope_project);

router.post('/:id/ejermensaje', mensajeController.mensaje_develope_project_post);

router.delete('/:id', mensajeController.mensaje_delete);

router.put('/:id', mensajeController.mensaje_edit_put);*/

module.exports = router;
