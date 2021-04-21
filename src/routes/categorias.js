const express = require('express');
const { check } = require('express-validator');
const router =  express.Router();
const categoriasController = require('../controllers/categoriasController');
const validatorParams = require('../middlewares/validatorParams');
const verifyToken = require('../middlewares/auth');

router.get("/",categoriasController.getAll);

router.get("/:id",categoriasController.findById);

router.get("/buscar_categoria_nombre/:categoria",categoriasController.findByNombre);

router.post("/",[
  check('categoria','La categoria es obligatoria')
],validatorParams,verifyToken,categoriasController.create);

router.put("/:id",[
  check('categoria','La categoria es obligatoria')
],validatorParams,verifyToken,categoriasController.update);

router.delete("/:id",verifyToken,categoriasController.delete);