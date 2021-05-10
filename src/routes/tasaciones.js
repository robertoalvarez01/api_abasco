const express = require('express');
const tasacionesController = require('../controllers/tasacionesController');
const validatorParams = require('../middlewares/validatorParams');
const { check } = require('express-validator');
const router = express.Router();

router.post('/',[
    check('nombre','El nombre es obligatorio').isString(),
    check('email','El email es obligatorio').isString(),
    check('telefono','El telefono es obligatorio').isString(),
    check('localidad','La Localidad es obligatoria').isString(),
    check('barrio','El barrio es obligatorio').isString(),
    check('categoria','La categoria es obligatoria').isString(),
    check('operacion','La operacion es obligatoria').isString(),
    check('mensaje','El mensaje es obligatorio').isString()
],validatorParams,tasacionesController.sendEmail);

module.exports = router;
