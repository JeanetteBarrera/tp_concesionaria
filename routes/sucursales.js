const express = require("express");
const router = express.Router();

let sucursalesController = require("../controller/sucursalesController.js");

router.get("/sucursales", sucursalesController.listar);
router.get("/sucursales/:sucursal", sucursalesController.porSucursal);

module.exports = router;