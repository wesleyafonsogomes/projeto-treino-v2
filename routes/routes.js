const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");


// rota POST no express 

router.post("/", carController.create);

module.exports = router;