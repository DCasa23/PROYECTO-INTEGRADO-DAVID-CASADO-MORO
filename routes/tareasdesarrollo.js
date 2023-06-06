var express = require('express');
var router = express.Router();

// Require de los controladores de users
const tareasdesarrolloController = require("../controllers/tareasdesarrolloController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("tareasdesarrollo", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', tareasdesarrolloController.desarrollo);

router.get('/:id', tareasdesarrolloController.desarrollo_develope_project);

//router.get('/:id/correcciondesarrollo', tareasdesarrolloController.desarrollo_edit_get);

router.put('/:id/', tareasdesarrolloController.desarrollo_edit_put);

module.exports = router;
