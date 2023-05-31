var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tareastestController = require("../controllers/tareastestController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tareastest", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', tareastestController.test);

router.get('/:id', tareastestController.test_develope_project);


module.exports = router;
