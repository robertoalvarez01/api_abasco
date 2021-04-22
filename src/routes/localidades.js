const express = require('express');
const router = express.Router();
const localidadesController = require('../controllers/localidadesController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');

router.get("/",localidadesController.getAll);

router.get("/:id",localidadesController.findById);

router.post("/",[
  check('idPartido','Partido es obligatorio'),
  check('localidad','Localidad es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,localidadesController.create);

router.put("/",[
  check('idPartido','Partido es obligatorio'),
  check('localidad','Localidad es obligatorio'),
  check('id','id es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,localidadesController.update);

router.delete("/:id",verifyToken,verifyAdminUser,localidadesController.delete);