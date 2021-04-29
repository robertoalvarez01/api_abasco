const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const serviciosController = require('../controllers/servicioController');

router.get("/",verifyToken,verifyAdminUser,serviciosController.getAll);

router.post("/",[
  check('idCasa','IdCasa es obligatorio').isNumeric(),
  check('luz','Luz es obligatorio').isString(),
  check('agua','Agua es obligatorio').isString(),
  check('calefaccion','calefaccion es obligatorio').isString(),
  check('telefono','telefono es obligatorio').isString(),
  check('gas','gas es obligatorio').isString(),
  check('internet','internet es obligatorio').isString()
],validatorParams,verifyToken,verifyAdminUser,serviciosController.create);
  
router.put("/",[
  check('idCasa','IdCasa es obligatorio').isNumeric(),
  check('luz','Luz es obligatorio').isString(),
  check('agua','Agua es obligatorio').isString(),
  check('calefaccion','calefaccion es obligatorio').isString(),
  check('telefono','telefono es obligatorio').isString(),
  check('gas','gas es obligatorio').isString(),
  check('internet','internet es obligatorio').isString()
],validatorParams,verifyToken,verifyAdminUser,serviciosController.update);
  
router.delete("/:id",verifyToken,verifyAdminUser,serviciosController.delete);

module.exports = router;