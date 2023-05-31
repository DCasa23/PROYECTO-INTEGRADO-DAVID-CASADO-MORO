var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tareastestunicoController = require("../controllers/tareastestunicoController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tareastestunico", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', tareastestunicoController.testunico);

router.get('/:id', tareastestunicoController.testunico_develope_project);


module.exports = router;
