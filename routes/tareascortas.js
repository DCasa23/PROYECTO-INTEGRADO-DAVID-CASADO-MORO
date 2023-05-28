var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tareascortasController = require("../controllers/tareascortasController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tareascortas", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', tareascortasController.cortas);

router.get('/:id', tareascortasController.cortas_develope_project);


module.exports = router;
