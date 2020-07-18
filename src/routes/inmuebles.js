const express = require('express');
const db = require("../database/database");
const password = "ZAQ12wsx";

function inmueblesApi(app) {
    const router = express.Router();
    app.use("/",router);

    router.post("/insertar_inmueble", (req, res) => {
        const {idOperacion,precio,idPartido,idLocalidad,direccion,idCategoria,descripcion,estado, mostrarEstado,moneda,pass} = req.body;
        if (pass == password) {
          db.query(
            "INSERT INTO inmuebles(idOperacion, precio, idPartido,idLocalidad, direccion, idCategoria, descripcion, estado, mostrarEstado,moneda) VALUES (? , ?, ?, ? , ?, ?, ?, ?, ?, ?)",
            [
              idOperacion,
              precio,
              idPartido,
              idLocalidad,
              direccion,
              idCategoria,
              descripcion,
              estado,
              mostrarEstado,
              moneda,
            ],
            (err, rows, fields) => {
              if (!err) {
                db.query(
                  "SELECT id FROM inmuebles ORDER BY id DESC LIMIT 1",
                  [
                    idOperacion,
                    precio,
                    idPartido,
                    idLocalidad,
                    direccion,
                    idCategoria,
                    descripcion,
                    estado,
                    moneda,
                  ],
                  (error, filas, celdas) => {
                    if (!error) {
                      res.send({
                        status: true,
                        data: filas,
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
      
      // FINAL FUNCIÓN ----- INSERTAR INMUEBLES -----
      
      // INICIO FUNCIÓN ----- MOSTRAR INMUEBLES -----
      
      router.get("/listar_inmuebles/:cantidad/:order", (req, res) => {
        const cantidad = parseInt(req.params.cantidad);
        const order = req.params.order;
        if (order == "normal") {
          db.query(
            "SELECT  partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id ORDER BY inmuebles.id DESC LIMIT ?",
            [cantidad],
            (err, rows, fields) => {
              if (!err) {
                casas = [];
                rows.forEach((inmueble) => {
                  casas.push(inmueble.id);
                });
                db.query(
                  "SELECT * FROM imagenes WHERE idCasa IN (?) AND header = true",
                  [casas],
                  (error, imagen, celdas) => {
                    if (!error) {
                      rows.forEach((propiedad) => {
                        imagen.forEach((header) => {
                          if (propiedad.id == header.idCasa) {
                            propiedad.header = header.nombre;
                          }
                        });
                      });
      
                      res.send({
                        status: true,
                        data: rows,
                        info: "se muestran todas los inmuebles que hay en la DB",
                      });
                    } else {
                      res.send({
                        status: false,
                        info: error,
                      });
                    }
                  }
                );
              } else {
                res.send({
                  status: false,
                  info: err,
                });
              }
            }
          );
        } else if (order == "high") {
          db.query(
            "SELECT  partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id ORDER BY inmuebles.precio DESC LIMIT ?",
            [cantidad],
            (err, rows, fields) => {
              if (!err) {
                casas = [];
                rows.forEach((inmueble) => {
                  casas.push(inmueble.id);
                });
                db.query(
                  "SELECT * FROM imagenes WHERE idCasa IN (?) AND header = true",
                  [casas],
                  (error, imagen, celdas) => {
                    if (!error) {
                      rows.forEach((propiedad) => {
                        imagen.forEach((header) => {
                          if (propiedad.id == header.idCasa) {
                            propiedad.header = header.nombre;
                          }
                        });
                      });
      
                      res.send({
                        status: true,
                        data: rows,
                        info: "se muestran todas los inmuebles que hay en la DB",
                      });
                    } else {
                      res.send({
                        status: false,
                        info: error,
                      });
                    }
                  }
                );
              } else {
                res.send({
                  status: false,
                  info: err,
                });
              }
            }
          );
        } else if (order == "low") {
          db.query(
            "SELECT  partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id ORDER BY inmuebles.precio ASC LIMIT ?",
            [cantidad],
            (err, rows, fields) => {
              if (!err) {
                casas = [];
                rows.forEach((inmueble) => {
                  casas.push(inmueble.id);
                });
                db.query(
                  "SELECT * FROM imagenes WHERE idCasa IN (?) AND header = true",
                  [casas],
                  (error, imagen, celdas) => {
                    if (!error) {
                      rows.forEach((propiedad) => {
                        imagen.forEach((header) => {
                          if (propiedad.id == header.idCasa) {
                            propiedad.header = header.nombre;
                          }
                        });
                      });
      
                      res.send({
                        status: true,
                        data: rows,
                        info: "se muestran todas los inmuebles que hay en la DB",
                      });
                    } else {
                      res.send({
                        status: false,
                        info: error,
                      });
                    }
                  }
                );
              } else {
                res.send({
                  status: false,
                  info: err,
                });
              }
            }
          );
        }
      });
      
      // FINAL FUNCIÓN ----- MOSTRAR INMUEBLES -----
      
      // INICIO FUNCIÓN ----- DETALLAR INMUEBLE X ID-----
      
      router.get("/detallar_inmueble_id/:id", (req, res) => {
        const id = req.params.id;
        if (id != undefined) {
          db.query(
            "SELECT partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria,servicios.*, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id LEFT JOIN servicios ON inmuebles.id = servicios.idCasa LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa WHERE inmuebles.id = ?;",
            [id],
            (err, rows, fields) => {
              if (!err) {
                db.query(
                  "SELECT * FROM imagenes WHERE idCasa = ?",
                  [id],
                  (error, images, celdas) => {
                    if (!error) {
                      res.send({
                        status: true,
                        data: rows,
                        imagenes: images,
                        info: "Se muestran todos los detalles de la casa con ese id",
                      });
                    } else {
                      res.send({
                        status: false,
                        info: "Problemas en el segundo Query (Imagenes)",
                      });
                    }
                  }
                );
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
      
      // FINAL FUNCIÓN ----- DETALLAR INMUEBLE X ID -----
      
      // INICIO FUNCIÓN ----- MODIFICAR INMUEBLE -----
      
      router.put("/modificar_inmueble", (req, res) => {
        const {
          id,
          pass,
          idOperacion,
          precio,
          idPartido,
          idLocalidad,
          direccion,
          idCategoria,
          descripcion,
          estado,
          mostrarEstado,
          moneda,
        } = req.body;
        if (pass == password) {
          db.query(
            "UPDATE inmuebles SET idOperacion = ?, precio = ?, idPartido = ? ,idLocalidad = ?, direccion = ?, idCategoria = ?, descripcion = ?, estado = ?, mostrarEstado = ?,moneda = ? WHERE id = ?",
            [
              idOperacion,
              precio,
              idPartido,
              idLocalidad,
              direccion,
              idCategoria,
              descripcion,
              estado,
              mostrarEstado,
              moneda,
              id,
            ],
            (err, rows, fields) => {
              if (!err) {
                res.send({
                  status: true,
                  info: "inmueble modificado con éxito",
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
      
      // FINAL FUNCIÓN ----- MODIFICAR INMUEBLE -----
      
      // INICIO FUNCIÓN ----- BORRAR INMUEBLE -----
      
      router.delete("/borrar_inmueble/:id/:pass", (req, res) => {
        const { id, pass } = req.params;
        if (pass == password) {
          db.query(
            "DELETE FROM datos_tecnicos WHERE idCasa = ?;DELETE FROM servicios WHERE idCasa = ?;DELETE FROM imagenes WHERE idCasa = ?;DELETE FROM inmuebles WHERE id = ?;",
            [id, id, id, id],
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
      
      // FINAL FUNCIÓN ----- BORRAR INMUEBLE -----
}

module.exports = inmueblesApi;