const express = require("express");
const router = express.Router();

const marcasController = require("../controller/marcasController.js")
router.get("/marcas", marcasController.todasLasMarcas);
router.get("/marcas/:marca", marcasController.marcaEspecifica);

module.exports = router;