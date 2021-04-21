const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken} = require('../middlewares/auth');

///    api/auth

router.post('/login',[
    check('email','Agrega un email valido').isEmail(),
    check('pw','El password debe ser mínimo de 6 caracteres').isLength({min:6})
],validatorParams,authController.login);

router.get('/',verifyToken,authController.obtenerUsuario);

module.exports = router;