var express = require('express');
var router = express.Router();

// Require de los controladores de users
const testController = require("../controllers/testController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("test", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', testController.test);

router.get('/creartest/', testController.test_create_project);

router.post('/creartest/', testController.test_create_project_post);



module.exports = router;
