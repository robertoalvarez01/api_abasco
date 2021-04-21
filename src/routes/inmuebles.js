const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const verifyToken = require('../middlewares/auth');
const { check } = require('express-validator');
const inmuebleController = require('../controllers/inmuebleController');


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
],validatorParams,verifyToken,inmuebleController.create);

router.get("/",inmuebleController.getAll);

router.get("/:id",inmuebleController.findById);

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
],validatorParams,verifyToken,inmuebleController.update);

router.delete("/:id",verifyToken,inmuebleController.delete);
  

router.put('/habilitar_inmueble/:id',verifyToken,inmuebleController.updateEstado);
