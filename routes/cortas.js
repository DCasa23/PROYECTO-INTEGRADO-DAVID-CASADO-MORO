var express = require('express');
var router = express.Router();

// Require de los controladores de users
const cortasController = require("../controllers/cortasController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("login", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', cortasController.cortas);

router.get('/crearcortas', cortasController.cortas_create_project);

router.post('/crearcortas', cortasController.cortas_create_project_post);



module.exports = router;
