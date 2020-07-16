const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";
const multer = require('../lib/multer');
const CloudStorage = require('../services/CloudStorage');
const ImagenesService = require('../services/Imagenes');

function imagenesApi(app) {
    const router = express.Router();
    app.use("/",router);
    const cs = new CloudStorage();
    const imagenesService = new ImagenesService();
    router.post("/insertar_imagen",multer.single('header'),async(req, res) => {
        try {
          const { idCasa, pass } = req.body;
          if (pass !== password){
            res.send({
              status: false,
              info: "la contraseña ingresada no es compatible",
            });
            return;
          }
          //subo la imagen al storage y me devuelve el link
          cs.upload(req.file).then(link => {
            db.query(
              "INSERT INTO imagenes(idCasa, nombre, header) VALUES (?, ?, ?)",
              [idCasa, link, true],
              (err, rows, fields) => {
                if (!err) {
                  res.send({
                    status: true,
                    info: "imagen insertada con éxito",
                  });
                } else {
                  res.send({
                    status: false,
                    info: err,
                  });
                }
              }
            );
          }).catch((err) => {
            res.status(400).send({
              info:err
            })
          });
        } catch (error) {
          res.status(400).send({
            info:err
          })
        }
    });
      
    router.put("/modificar_imagen",multer.single('header'),(req, res) => {
      const { id , pass } = req.body;
      if (pass !== password){
        res.send({
          status: false,
          info: "la contraseña ingresada no es compatible",
        });
        return;
      };
      if(req.file){
        cs.upload(req.file).then(link=>{
          db.query("UPDATE imagenes SET nombre =? WHERE id = ?",[link, id],(err, rows, fields) => {
            if (!err) {
              res.status(200).send({
                info: "Imagen modificada con éxito",
              });
            } else {
              res.status(500).send({
                info: err,
              });
            }
          });
        })
      }
    });
      
    router.delete("/borrar_imagen/:id", (req, res) => {
      const {pass , name} = req.query;
      const { id } = req.params;
      if (pass != password) {
        res.status(403).send({
          info: "la contraseña ingresada no es compatible",
        });
        return;
      }
      cs.delete(name).then(()=>{
        db.query("DELETE FROM imagenes WHERE id=?", [id], (err, rows, fields) => {
          if (!err) {
            res.status(200).send({
              info: "se ha borrado con éxito la imágen",
            });
          } else {
            res.status(500).send({
              info: err,
            });
          }
        });
      })
    });
      
    router.get("/imagenes", (req, res) => {
        db.query("SELECT * FROM imagenes", (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todas las imagenes que hay en la DB",
            });
          } else {
            res.send({
              status: false,
              info: err,
            });
          }
        });
    });


    //carga de varias imagenes
    router.post('/imagenes-varios',multer.array('imagenes'),async (req,res,next)=>{
      const {pass,idCasa} = req.body;
      if(pass !== password){
        res.status(403).send({
          info:'Contraseña incorrecta'
        });
        return;
      }
      if(!req.files){
        res.status(500).send({
          info:'Files not found'
        });
        return;
      };
      await imagenesService.subirImagenesVarias(req.files,idCasa);
      res.status(200).send({
        info:'Imagenes subidas'
      })
    });

}

module.exports = imagenesApi;