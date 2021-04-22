const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const datoTecnicoController = require('../controllers/datoTecnicoController');


router.get("/",datoTecnicoController.getAll);

router.post("/",[
  check('dormitorios','Dormitorio obligatorio'),
  check('s_terreno','s_terreno obligatorio'),
  check('s_cubierta','s_cubierta obligatorio'),
  check('s_semicubierta','s_semicubierta obligatorio'),
  check('s_total','s_total obligatorio'),
  check('cochera','cochera obligatorio'),
  check('pileta','pileta obligatorio'),
  check('u_medida','u_medida obligatorio'),
  check('idCasa','idCasa obligatorio'),
],validatorParams,verifyToken,verifyAdminUser,datoTecnicoController.create);

router.put("/",[
  check('dormitorios','Dormitorio obligatorio'),
  check('s_terreno','s_terreno obligatorio'),
  check('s_cubierta','s_cubierta obligatorio'),
  check('s_semicubierta','s_semicubierta obligatorio'),
  check('s_total','s_total obligatorio'),
  check('cochera','cochera obligatorio'),
  check('pileta','pileta obligatorio'),
  check('u_medida','u_medida obligatorio'),
  check('idCasa','idCasa obligatorio'),
],validatorParams,verifyToken,verifyAdminUser,datoTecnicoController.update);

router.delete("/:id",verifyToken,datoTecnicoController.delete);

