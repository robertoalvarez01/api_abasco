const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function datostecnicosApi(app) {
    const router = express.Router();
    app.use("/",router);

    router.put("/modificar_dato_tecnico", (req, res) => {
        const {pass,idCasa,dormitorios,s_terreno,s_cubierta,s_semicubierta,s_total,cochera,pileta,u_medida} = req.body;
        if (pass == password) {
          db.query(
            "UPDATE datos_tecnicos SET  dormitorios =?, s_terreno =?, s_cubierta =?, s_semicubierta =?, s_total=?, cochera =?, pileta =?, u_medida = ? WHERE idCasa = ?",[dormitorios,s_terreno,s_cubierta,s_semicubierta,s_total,cochera,pileta,u_medida,idCasa,],(err, rows, fields) => {
                if (!err) {
                    res.send({
                    status: true,
                    info: "Dato tecnico modificado con éxito",
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
      
      // FINAL FUNCIÓN ----- MODIFICAR DATO TECNICO -----
      
      // INICIO FUNCIÓN ----- BORRAR DATO TECNICO -----
      
      router.delete("/borrar_dato_tecnico/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query(
            "DELETE FROM datos_tecnicos WHERE id=?",
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
      
      // FINAL FUNCIÓN ----- BORRAR DATO TECNICO -----
      
      // INICIO FUNCIÓN ----- MOSTRAR DATOS TECNICOS -----
      
      router.get("/datos_tecnicos", (req, res) => {
        db.query("SELECT * FROM datos_tecnicos", (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todos los datos tecnicos que hay en la DB",
            });
          } else {
            res.send({
              status: false,
              info: err,
            });
          }
        });
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR DATOS TECNICOS -----
      
      // INICIO FUNCIÓN ----- INSERTAR DATOS TECNICOS -----
      
      router.post("/insertar_dato_tecnico", (req, res) => {
        const {
          pass,
          idCasa,
          dormitorios,
          s_terreno,
          s_cubierta,
          s_semicubierta,
          s_total,
          cochera,
          pileta,
          u_medida
        } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO datos_tecnicos(idCasa, dormitorios, s_terreno, s_cubierta, s_semicubierta, s_total, cochera, pileta, u_medida) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)",
            [
              idCasa,
              dormitorios,
              s_terreno,
              s_cubierta,
              s_semicubierta,
              s_total,
              cochera,
              pileta,
              u_medida
            ],
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
      
}


module.exports = datostecnicosApi;
