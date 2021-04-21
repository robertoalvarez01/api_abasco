const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const verifyToken = require('../middlewares/auth');
const { check } = require('express-validator');
const serviciosController = require('../controllers/servicioController');

router.get("/",serviciosController.getAll);

router.post("/",[
  check('idCasa','IdCasa es obligatorio'),
  check('luz','Luz es obligatorio'),
  check('agua','Agua es obligatorio'),
  check('calefaccion','calefaccion es obligatorio'),
  check('telefono','telefono es obligatorio'),
  check('gas','gas es obligatorio'),
  check('internet','internet es obligatorio')
],validatorParams,verifyToken,serviciosController.create);
  
router.put("/",[
  check('idCasa','IdCasa es obligatorio'),
  check('luz','Luz es obligatorio'),
  check('agua','Agua es obligatorio'),
  check('calefaccion','calefaccion es obligatorio'),
  check('telefono','telefono es obligatorio'),
  check('gas','gas es obligatorio'),
  check('internet','internet es obligatorio')
],validatorParams,verifyToken,serviciosController.update);
  
router.delete("/:id",verifyToken,serviciosController.delete);
  