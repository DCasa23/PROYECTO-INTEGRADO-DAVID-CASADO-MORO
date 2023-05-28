var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tarjetasController = require("../controllers/tarjetasController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tarjetas", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', tarjetasController.tarjetas);

router.get('/creartarjetas/', tarjetasController.tarjetas_create_project);

router.post('/creartarjetas/', tarjetasController.tarjetas_create_project_post);

router.get('/:id', tarjetasController.tarjetas_develope_project);

module.exports = router;
