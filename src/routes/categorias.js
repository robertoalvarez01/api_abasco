const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function categoriasapi(app) {
    const router = express.Router();
    app.use("/",router);
    
    router.delete("/borrar_categoria/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query("DELETE FROM categorias WHERE id=?", [id], (err, rows, fields) => {
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
      
      // FINAL FUNCIÓN ----- BORRAR CATEGORIA -----
      
      // INICIO FUNCIÓN ----- MOSTRAR CATEGORIAS -----
      
      router.get("/categorias", (req, res) => {
        db.query("SELECT * FROM categorias", (err, rows, fields) => {
          if (!err) {
            res.send({
              status: true,
              data: rows,
              info: "se muestran todas las categorias que hay en la DB",
            });
          } else {
            res.send({
              status: false,
              info: err,
            });
          }
        });
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR CATEGORIAS -----
      
      // INICIO FUNCIÓN ----- BUSCAR CATEGORIA X ID -----
      
      router.get("/buscar_categoria_id/:id", (req, res) => {
        const id = req.params.id;
        if (id != undefined) {
          db.query(
            "SELECT * FROM categorias WHERE id LIKE ? ",
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
      
      // FINAL FUNCIÓN ----- BUSCAR CATEGORIA X ID -----
      
      // INICIO FUNCIÓN ----- BUSCAR CATEGORIA X NOMBRE -----
      
      router.get("/buscar_categoria_nombre/:categoria", (req, res) => {
        const categoria = req.params.categoria;
        if (categoria != undefined) {
          db.query(
            "SELECT * FROM categorias WHERE categoria LIKE ? ",
            [categoria],
            (err, rows, fields) => {
              if (!err) {
                console.log(rows);
                res.send({
                  status: true,
                  data: rows,
                  info:
                    "se muestran todas las categorias con ese nombre que hay en la DB",
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
            info: "No has ingresado ningun nombre de categoria para buscar",
          });
        }
      });
      
      // FINAL FUNCIÓN ----- BUSCAR CATEGORIA X NOMBRE -----
      
      // INICIO FUNCIÓN ----- INSERTAR CATEGORIA -----
      
      router.post("/insertar_categoria", (req, res) => {
        const { categoria, pass } = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO categorias(categoria) VALUES (?)",
            [categoria],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "categoria insertada con éxito",
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
      
      // FINAL FUNCIÓN ----- INSERTAR CATEGORIA -----
      
      // INICIO FUNCIÓN ----- MODIFICAR CATEGORIA -----
      
      router.put("/modificar_categoria", (req, res) => {
        const { id, categoria, pass } = req.body;
        if (pass == password) {
          db.query(
            "UPDATE categorias SET categoria = ? WHERE id = ?",
            [categoria, id],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "categoria modificada con éxito",
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

module.exports = categoriasapi;