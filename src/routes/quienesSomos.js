const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const nosotrosController = require('../controllers/nosotrosController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');


router.get('/',nosotrosController.getInfo);

router.put('/',[
    check('contenido','El contenido es obligatorio').isString()
],validatorParams,verifyToken,verifyAdminUser,nosotrosController.modificarInfo);

module.exports = router;