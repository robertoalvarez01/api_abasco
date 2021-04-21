const express = require('express');
const { check } = require('express-validator');
const router =  express.Router();
const barriosController = require('../controllers/barriosController');
const validatorParams = require('../middlewares/validatorParams');
const verifyToken = require('../middlewares/auth');

router.get('/',barriosController.getAll);

router.get('/:id',barriosController.findById);

router.get('/filtrarPorLocalidad',barriosController.findByLocalidad);

router.post("/",[
  check('barrio','El barrio es obligatorio'),
  check('idLocalidad','La localidad es obligatoria')
],validatorParams,verifyToken,barriosController.create);

router.put("/:id",[
  check('barrio','El barrio es obligatorio'),
  check('idLocalidad','La localidad es obligatoria')
],validatorParams,verifyToken,barriosController.update);

router.delete("/:id",verifyToken,barriosController.delete);

