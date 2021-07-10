const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const inmuebleController = require('../controllers/inmuebleController');


router.get("/",inmuebleController.getAll);

router.get("/:id",inmuebleController.findById);

router.get("/filtrar",inmuebleController.filtrar);

router.post("/",verifyToken,verifyAdminUser,inmuebleController.create);

router.put("/:id",verifyToken,verifyAdminUser,inmuebleController.update);

router.put('/habilitar_inmueble/:id',verifyToken,verifyAdminUser,inmuebleController.updateEstado);

router.delete("/:id",verifyToken,verifyAdminUser,inmuebleController.delete);

module.exports = router;