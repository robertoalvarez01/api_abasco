const express = require('express');
const contactoController = require('../controllers/contactoController');
const validatorParams = require('../middlewares/validatorParams');
const verifyToken = require('../middlewares/auth');
const { check } = require('express-validator');
const router = express.Router();

router.get('/',contactoController.getInfo);

router.put('/:id',[
    check('telefonoPrincipal','El telefono principal es obligatorio'),
    check('whatsapp','whatsapp obligatorio'),
    check('facebook','facebook obligatorio'),
    check('instagram','instagram es obligatorio'),
    check('direccion','direccion obligatoria')
],validatorParams,verifyToken,contactoController.update);

router.post('/sendMail',[
    check('nombre','El nombre es obligatorio'),
    check('email','El email es obligatorio'),
    check('mensaje','El mensaje es obligatorio')
],validatorParams,contactoController.sendEmail);
