const express = require("express");
const router = express.Router();

let autosController = require("../controller/autosController");

router.get("/autos", autosController.listar);
router.get("/autos/:marca",autosController.filtrarPorMarca);
router.get("/autos/:marca/:anio", autosController.filtrarPorAnio);
router.get("/autos/:marcas/:color", autosController.filtrarPorColor);

module.exports = router;