const express = require('express');
const { check } = require('express-validator');
const router =  express.Router();
const categoriasController = require('../controllers/categoriasController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');

router.get("/",categoriasController.getAll);

router.get("/:id",verifyToken,verifyAdminUser,categoriasController.findById);

router.get("/buscar_categoria_nombre/:categoria",categoriasController.findByNombre);

router.post("/",[
  check('categoria','La categoria es obligatoria').isString()
],validatorParams,verifyToken,verifyAdminUser,categoriasController.create);

router.put("/:id",[
  check('categoria','La categoria es obligatoria').isString()
],validatorParams,verifyToken,verifyAdminUser,categoriasController.update);

router.delete("/:id",verifyToken,verifyAdminUser,categoriasController.delete);

module.exports = router;