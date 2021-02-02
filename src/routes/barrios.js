const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function barriosApi(app){
    const router = express.Router();
    app.use("/barrios",router);

    router.get('/',(req,res)=>{
        db.query(`SELECT idBarrio, barrio, localidad FROM barrios as bar, localidades as loc
                WHERE bar.idLocalidad = loc.id ORDER BY bar.idBarrio DESC`, (err, rows, fields) => {
            if (!err) {
              res.send({
                status: true,
                data:rows,
                info: "Barrios listados",
              });
            } else {
              res.send({
                status: false,
                info: err,
              });
            }
        });
    })

    router.get('/:id',(req,res)=>{
        const {id} = req.query;
        db.query(`SELECT idBarrio, barrio, localidad, bar.idLocalidad FROM barrios as bar, localidades as loc
                WHERE bar.idLocalidad = loc.id AND bar.idBarrio = ${id}`, (err, rows, fields) => {
            if (!err) {
              res.send({
                status: true,
                data:rows,
                info: "Barrio listado",
              });
            } else {
              res.send({
                status: false,
                info: err,
              });
            }
        });
    })

    router.get('/filtrarPorLocalidad',(req,res)=>{
        const {idLocalidad} = req.query;
        db.query(`SELECT idBarrio, barrio, localidad FROM barrios as bar, localidades as loc
                WHERE bar.idLocalidad = loc.id AND bar.idLocalidad = ? ORDER BY bar.idBarrio DESC`,[idLocalidad],(err, rows, fields) => {
            if (!err) {
              res.send({
                status: true,
                data:rows,
                info: "Barrios listados",
              });
            } else {
              res.send({
                status: false,
                info: err,
              });
            }
        });
    })

    router.post("/insertar_barrio", (req, res) => {
        const { barrio, idLocalidad, pass } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO barrios(barrio,idLocalidad) VALUES (?,?)",
            [barrio,idLocalidad],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "Barrio agregado con éxito",
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

    router.put("/modificar_barrio/:id", (req, res) => {
        const { id } = req.params;
        const {barrio, idLocalidad, pass} = req.body; 
        if (pass == password) {
          db.query(
            "UPDATE barrios SET barrio = ?, idLocalidad = ? WHERE idBarrio = ?",
            [barrio,idLocalidad,id],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "Barrio modificado con éxito",
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

    router.delete("/borrar_barrio/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query("DELETE FROM barrios WHERE idBarrio=?", [id], (err, rows, fields) => {
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
}

module.exports = barriosApi;
