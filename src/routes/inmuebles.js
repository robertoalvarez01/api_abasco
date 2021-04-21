const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const inmuebleController = require('../controllers/inmuebleController');


router.get("/",inmuebleController.getAll);

router.get("/:id",inmuebleController.findById);

router.post("/",[
  check('idOperacion','Operacion es obligatorio'),
  check('precio','precio es obligatorio'),
  check('idPartido','Partido es obligatorio'),
  check('idLocalidad es obligatorio'),
  check('idBarrio es obligatorio'),
  check('direccion','Direccion es obligatorio'),
  check('idCategoria','Categoria es obligatorio'),
  check('descripcion','Descripcion es obligatorio'),
  check('estado','Estado es obligatorio'),
  check('mostrarEstado','Mostrar estado es obligatorio'),
  check('moneda','Moneda es obligatorio'),
  check('lat','Latitud es obligatorio'),
  check('lon','Longitud es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,inmuebleController.create);

router.put("/:id",[
  check('idOperacion','Operacion es obligatorio'),
  check('precio','precio es obligatorio'),
  check('idPartido','Partido es obligatorio'),
  check('idLocalidad es obligatorio'),
  check('idBarrio es obligatorio'),
  check('direccion','Direccion es obligatorio'),
  check('idCategoria','Categoria es obligatorio'),
  check('descripcion','Descripcion es obligatorio'),
  check('estado','Estado es obligatorio'),
  check('mostrarEstado','Mostrar estado es obligatorio'),
  check('moneda','Moneda es obligatorio'),
  check('lat','Latitud es obligatorio'),
  check('lon','Longitud es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,inmuebleController.update);

router.delete("/:id",verifyToken,verifyAdminUser,inmuebleController.delete);
  
router.put('/habilitar_inmueble/:id',verifyToken,verifyAdminUser,inmuebleController.updateEstado);

module.exports = router;