const express = require('express');
const router = express.Router();
const ciudadesController = require('../controllers/ciudadesController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');

router.get("/",ciudadesController.getAll);

router.get("/:id",verifyToken,verifyAdminUser,ciudadesController.findById);

router.post("/",[
  check('idPartido','Partido es obligatorio'),
  check('ciudad','Ciudad es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,ciudadesController.create);

router.put("/:id",[
  check('idPartido','Partido es obligatorio'),
  check('ciudad','Ciudad es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,ciudadesController.update);

router.delete("/:id",verifyToken,verifyAdminUser,ciudadesController.delete);

module.exports = router;