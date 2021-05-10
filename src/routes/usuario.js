const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const usuarioController = require('../controllers/usuarioController');
const validatorParams = require('../middlewares/validatorParams.js');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');

///    api/usuarios

router.get('/',verifyToken,verifyAdminUser,usuarioController.getAll);

router.get('/:id',verifyToken,verifyAdminUser,usuarioController.get);

router.post('/',[
    check('email','Agrega un email valido').isEmail(),
    check('pw','El password debe ser mínimo de 6 caracteres').isLength({min:6}),
    check('nombre','El nombre es obligatorio').isString(),
    check('foto','La foto es obligatoria o null')
],validatorParams,usuarioController.create);

router.put('/:id',[
    check('email','Agrega un email valido').isEmail(),
    check('pw','El password debe ser mínimo de 6 caracteres').isLength({min:6}),
    check('nombre','El nombre es obligatorio').isString(),
    check('foto','La foto es obligatoria o null')
],validatorParams,verifyToken,verifyAdminUser,usuarioController.update);

router.delete('/:id',verifyToken,verifyAdminUser,usuarioController.delete);

module.exports = router;
