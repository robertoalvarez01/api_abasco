const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const imagenesController = require('../controllers/imagenesController');
const validatorParams = require('../middlewares/validatorParams');
const {verifyToken,verifyAdminUser} = require('../middlewares/auth');
const multer = require('../lib/multer');


router.post("/",[
  check('header','imagen no recibida'),
  check('idCasa','El id de la propiedad es obligatorio').isNumeric()
],multer.single('header'),verifyToken,verifyAdminUser,imagenesController.agregar);

//carga de varias imagenes
router.post('/varios',[
  check('idCasa','El id de la casa es obligatorio')
],validatorParams,multer.array('imagenes'),verifyToken,verifyAdminUser,imagenesController.agregarVarias);
  
router.put("/",verifyToken,verifyAdminUser,multer.single('header'),imagenesController.modificarImagen);
  
router.delete("/:id",verifyToken,verifyAdminUser,imagenesController.eliminarImagen);
  
router.get("/:id",verifyToken,verifyAdminUser,imagenesController.getAll);

module.exports = router;