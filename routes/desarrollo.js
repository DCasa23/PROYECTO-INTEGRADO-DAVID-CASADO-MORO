var express = require('express');
var router = express.Router();

// Require de los controladores de users
const desarrolloController = require("../controllers/desarrolloController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("desarrollo", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', desarrolloController.desarrollo);

router.get('/creardesarrollo/', desarrolloController.desarrollo_create_project);

router.post('/creardesarrollo/', desarrolloController.desarrollo_create_project_post);



module.exports = router;
