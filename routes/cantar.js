var express = require('express');
var router = express.Router();

// Require de los controladores de users
const cantarController = require("../controllers/cantarController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("cantar", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});
router.get("/crearcantar/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("cantar", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', cantarController.cantar);

router.get('/crearcantar/', cantarController.cantar_create_project);

router.post('/crearcantar/', cantarController.cantar_create_project_post);

router.get('/:id', cantarController.cantar_develope_project);

router.post('/:id/ejercantar', cantarController.cantar_develope_project_post);

module.exports = router;
