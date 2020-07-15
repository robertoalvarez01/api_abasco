const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function operacionesApi(app) {
    const router = express.Router();
    app.use("/",router);

    router.get("/operaciones", (req, res) => {
        db.query("SELECT * FROM tipo_operacion", (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todas las operaciones que hay en la DB",
            });
          } else {
            res.send({
              status: false,
              info: err,
            });
          }
        });
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR TIPO DE OPERACIÓN -----
      
      // INICIO FUNCIÓN ----- MOSTRAR TIPO DE OPERACIÓN -----
      
      router.get("/buscar_operacion/:id", (req, res) => {
        const id = req.params.id;
        db.query(
          "SELECT * FROM tipo_operacion WHERE id = ?",
          [id],
          (err, rows, fields) => {
            if (!err) {
              res.send({
                status: true,
                data: rows,
                info: "se muestran todas las operaciones que hay en la DB",
              });
            } else {
              res.send({
                status: false,
                info: err,
              });
            }
          }
        );
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR TIPO DE OPERACIÓN -----
      
      // INICIO FUNCIÓN ----- INSERTAR TIPO DE OPERACIÓN -----
      
      router.post("/insertar_operacion", (req, res) => {
        const { operacion, pass } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO tipo_operacion(operacion) VALUES (?)",
            [operacion],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "operacion insertada con éxito",
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
      
      // FINAL FUNCIÓN ----- INSERTAR TIPO DE OPERACIÓN -----
      
      // INICIO FUNCIÓN ----- MODIFICAR TIPO DE OPERACIÓN -----
      
      router.put("/modificar_operacion", (req, res) => {
        const { id, operacion, pass } = req.body;
        if (pass == password) {
          db.query(
            "UPDATE tipo_operacion SET operacion = ? WHERE id = ?",
            [operacion, id],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "operacion modificada con éxito",
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

      router.delete("/borrar_operacion/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query(
            "DELETE FROM tipo_operacion WHERE id=?",
            [id],
            (err, rows, fields) => {
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
            }
          );
        } else {
          res.send({
            status: false,
            info: "la contraseña ingresada no es compatible",
          });
        }
      });
}

module.exports = operacionesApi;