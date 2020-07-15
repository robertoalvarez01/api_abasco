const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function serviciosApi(app) {
    const router = express.Router();
    app.use("/",router);
    
    router.post("/insertar_servicio", (req, res) => {
        const { idCasa, luz, agua, calefaccion, telefono,
          gas, internet, pass,} = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO servicios(idCasa, luz, agua, calefaccion, telefono, gas, internet) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [idCasa, luz, agua, calefaccion, telefono, gas, internet],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "servicio insertado con éxito",
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
      
    router.put("/modificar_servicio", (req, res) => {
        const {idCasa, luz, agua, calefaccion, telefono, gas, internet, pass} = req.body;
        if (pass == password) {
          db.query(
            "UPDATE servicios SET  luz =?, agua =?, calefaccion =?, telefono=?, gas=?, internet=? WHERE idCasa = ?",
            [luz, agua, calefaccion, telefono, gas, internet, idCasa],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "Servicio modificado con éxito",
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
      
    router.delete("/borrar_servcio", (req, res) => {
        const { id, pass } = req.body;
        if (pass == password) {
          db.query("DELETE FROM servicios WHERE id=?", [id], (err, rows, fields) => {
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
      
    router.get("/servicios", (req, res) => {
        db.query("SELECT * FROM servicios", (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todos los servicios que hay en la DB",
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

module.exports = serviciosApi;