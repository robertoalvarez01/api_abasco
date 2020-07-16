const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";
// const multer = require('../lib/multer');
// const path = require('path');
// const {Storage} = require('@google-cloud/storage');
// const {format} = require('util');

// const googleCloud = new Storage({
//   keyFilename:path.join(__dirname,'../sitios-trabajo-679d5ad729ed.json'),
//   projectId:'sitios-trabajo'
// })

//const bucket = googleCloud.bucket('agrogane-dev');

function imagenesApi(app) {
    const router = express.Router();
    app.use("/",router);

    router.post("/insertar_imagen", (req, res) => {
        const { idCasa, nombre, header, pass } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO imagenes(idCasa, nombre, header) VALUES (?, ?, ?)",
            [idCasa, nombre, header],
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
        } else {
          res.send({
            status: false,
            info: "la contraseña ingresada no es compatible",
          });
        }
    });
      
    router.put("/modificar_imagen", (req, res) => {
        const { id, nombre, header, idCasa, pass } = req.body;
        if (pass == password) {
          db.query(
            "UPDATE imagenes SET idCasa =?, nombre =?, header =? WHERE id = ?",
            [idCasa, nombre, header, id],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "Imagen modificada con éxito",
                });
              } else {
                res.send({
                  status: false,
                  info: err,
                });
              }
            }
          );
        } else {
          res.send({
            status: false,
            info: "la contraseña ingresada no es compatible",
          });
        }
    });
      
    router.delete("/borrar_imagen/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query("DELETE FROM imagenes WHERE id=?", [id], (err, rows, fields) => {
            if (!err) {
              res.send({
                status: true,
                info: "se ha borrado con éxito el registro",
              });
            } else {
              res.send({
                status: false,
                info: err,
              });
            }
          });
        } else {
          res.send({
            status: false,
            info: "la contraseña ingresada no es compatible",
          });
        }
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
      
}

module.exports = imagenesApi;