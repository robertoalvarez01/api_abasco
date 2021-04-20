const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const imagenesController = require('../controllers/imagenesController');
const validatorParams = require('../middleware/validatorParams');
const verifyToken = require('../middlewares/auth');
const multer = require('../lib/multer');


router.post("/",[
  check('header','imagen no recibida')
],multer.single('header'),verifyToken,imagenesController.agregar);

//carga de varias imagenes
router.post('/varios',[
  check('idCasa','El id de la casa es obligatorio')
],validatorParams,multer.array('imagenes'),verifyToken,imagenesController.agregarVarias);
  
router.put("/:id",verifyToken,multer.single('header'),imagenesController.modificarImagen);
  
router.delete("/:id",verifyToken,imagenesController.eliminarImagen);
  
router.get("/",verifyToken,imagenesController.getAll);

