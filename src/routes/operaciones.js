const express = require('express');
const router = express.Router();
const operacionesController = require('../controllers/operacionesController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');


router.get("/", operacionesController.getAll);

router.get("/:id",verifyToken,verifyAdminUser,operacionesController.findById);

router.post("/",[
  check('operacion','Operacion es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,operacionesController.create);

router.put("/:id",[
  check('operacion','Operacion es obligatorio')
],validatorParams,verifyToken,verifyAdminUser,operacionesController.update);

router.delete("/:id",verifyToken,verifyAdminUser,operacionesController.delete);

module.exports = router;