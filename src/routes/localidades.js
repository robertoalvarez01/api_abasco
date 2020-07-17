const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function localidadesApi(app) {
    const router = express.Router();
    app.use("/",router);
    router.delete("/borrar_localidades/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query("DELETE FROM localidades WHERE id=?", [id], (err, rows, fields) => {
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
      
      // FINAL FUNCIÓN ----- BORRAR UBICACIÓN -----
      
      // INICIO FUNCIÓN ----- MOSTRAR UBICACIÓN -----
      
      router.get("/ubicaciones", (req, res) => {
        db.query(`SELECT localidad.id,localidad.idPartido,partido,localidad FROM localidades AS localidad, partidos as partido 
        where localidad.idPartido = partido.id`, (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todas las ubicaciones que hay en la DB",
            });
          } else {
            res.send({
              status: false,
              info: err,
            });
          }
        });
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR UBICACIÓN -----
            
      // INICIO FUNCIÓN ----- BUSCAR UBICACION -----
      
      router.get("/buscar_ubicacion/:id", (req, res) => {
        const id = req.params.id;
        if (id != undefined) {
          db.query(
            `SELECT localidad.id,localidad.idPartido,partido,localidad FROM localidades AS localidad, partidos as partido 
            where localidad.idPartido = partido.id and localidad.id LIKE ? `,
            [id],
            (err, rows, fields) => {
              if (!err) {
                console.log(rows);
                res.send({
                  status: true,
                  data: rows,
                  info:
                    "se muestran todas las categorias con ese id que hay en la DB",
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
            info: "No has ingresado ningun id para buscar",
          });
        }
      });
      
      // FINAL FUNCIÓN ----- BUSCAR UBICACION -----
      
      // INICIO FUNCIÓN ----- INSERTAR UBICACIÓN -----
      
      router.post("/insertar_ubicacion", (req, res) => {
        const { idPartido, localidad, pass } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO localidades(idPartido, localidad) VALUES (? , ?)",
            [idPartido, localidad],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  rows,
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
      
      // FINAL FUNCIÓN ----- INSERTAR UBICACIÓN -----
      
      // INICIO FUNCIÓN ----- MODIFICAR UBICACIÓN -----
      
      router.put("/modificar_ubicacion", (req, res) => {
        const { id, idPartido, localidad, pass } = req.body;
        if (pass == password) {
          db.query(
            "UPDATE localidades SET idPartido = ? , localidad = ? WHERE id = ?",
            [idPartido, localidad, id],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "ubicacion modificada con éxito",
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

module.exports = localidadesApi;