const express = require('express');
const router = express.Router();
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const { check } = require('express-validator');
const partidosController = require('../controllers/partidosController');

router.get('/',partidosController.getAll);

router.get('/:id',verifyToken,verifyAdminUser,partidosController.findById);

router.post('/',[
    check('partido','Partido es obligatorio').isString()
],validatorParams,verifyToken,verifyAdminUser,partidosController.create);

router.put('/:id',[
    check('partido','Partido es obligatorio').isString()
],validatorParams,verifyToken,verifyAdminUser,partidosController.update);

router.delete('/:id',verifyToken,verifyAdminUser,partidosController.delete);

module.exports = router;