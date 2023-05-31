var express = require('express');
var router = express.Router();

// Require de los controladores de users
const testunicoController = require("../controllers/testunicoController");

// Comprueba que tiene iniciada sesión
router.get("/", (req, res, next) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta : false;
  if (!req.session.cuenta) {
    res.render("testunico", { tituloWeb: "Inicio de sesión", error: false });
  } else {
    next();
  }
});

/* GET home page. */
router.get('/', testunicoController.testunico);

router.get('/creartestunico/', testunicoController.testunico_create_project);

router.post('/creartestunico/', testunicoController.testunico_create_project_post);



module.exports = router;
