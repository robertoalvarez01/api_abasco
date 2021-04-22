const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const datoTecnicoController = require('../controllers/datoTecnicoController');


router.get("/",verifyToken,verifyAdminUser,datoTecnicoController.getAll);

router.post("/",[
  check('dormitorios','Dormitorio obligatorio').isString(),
  check('s_terreno','s_terreno obligatorio').isString(),
  check('s_cubierta','s_cubierta obligatorio').isString(),
  check('s_semicubierta','s_semicubierta obligatorio').isString(),
  check('s_total','s_total obligatorio').isString(),
  check('cochera','cochera obligatorio').isString(),
  check('pileta','pileta obligatorio').isString(),
  check('u_medida','u_medida obligatorio').isString(),
  check('idCasa','idCasa obligatorio').isNumeric(),
],validatorParams,verifyToken,verifyAdminUser,datoTecnicoController.create);

router.put("/",[
  check('dormitorios','Dormitorio obligatorio').isString(),
  check('s_terreno','s_terreno obligatorio').isString(),
  check('s_cubierta','s_cubierta obligatorio').isString(),
  check('s_semicubierta','s_semicubierta obligatorio').isString(),
  check('s_total','s_total obligatorio').isString(),
  check('cochera','cochera obligatorio').isString(),
  check('pileta','pileta obligatorio').isString(),
  check('u_medida','u_medida obligatorio').isString(),
  check('idCasa','idCasa obligatorio').isNumeric()
],validatorParams,verifyToken,verifyAdminUser,datoTecnicoController.update);

router.delete("/:id",verifyToken,datoTecnicoController.delete);

module.exports = router;