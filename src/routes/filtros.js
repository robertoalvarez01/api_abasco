const express = require('express');
const db = require("../database/database");

function filtrosApi(app) {
  const router = express.Router();
  app.use("/",router);

  router.get("/", (req, res) => {
    res.send("Servidor funcionando con exito");
  });

  router.get("/filtrar_operacion/:idOperacion/:order", (req, res) => {
    const {idOperacion , order} = req.params;
    let query = `SELECT  partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idOperacion = ${idOperacion}`;
    if(req.query.minPrecio && req.query.maxPrecio){
      query += ` AND inmuebles.precio BETWEEN ${req.query.minPrecio} AND ${req.query.maxPrecio}`;
    }
    if (order == "low"){
      query += ` ORDER BY precio ASC`;
    }else if('high'){
      query += ` ORDER BY precio DESC`;
    }
    db.query(query,(err, rows, fields) => {
      if (!err) {
        casas = [];
        rows.forEach((inmueble) => {
          casas.push(inmueble.id);
        });
        db.query(
          "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",[casas],(error, imagen, celdas) => {
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
    });
  });
  
  router.get("/filtrar_categoria/:idCategoria/:order", (req, res) => {
    const { idCategoria, order } = req.params;
    let query = `SELECT  partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ${idCategoria}`;
    if(req.query.minPrecio && req.query.maxPrecio){
      query += ` AND inmuebles.precio BETWEEN ${req.query.minPrecio} AND ${req.query.maxPrecio}`;
    }
    if(order == 'high'){
      query += `  ORDER BY precio DESC`;
    }else if(order == 'low'){
      query += `  ORDER BY precio ASC`;
    }
    db.query(query,(err, rows, fields) => {
      if (!err) {
        casas = [];
        rows.forEach((inmueble) => {
          casas.push(inmueble.id);
        });
        db.query("SELECT * FROM imagenes WHERE idCasa = ? AND header = true",[casas],(error, imagen, celdas) => {
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
        });
      } else {
        res.send({
          status: false,
          info: err,
        });
      }
    });
  });
  
  router.get("/filtrar_ubicacion/:idLocalidad/:order", (req, res) => {
    const { idLocalidad, order } = req.params;
    let query = `SELECT partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ${idLocalidad}`;
    if(req.query.minPrecio && req.query.maxPrecio){
      query += ` AND inmuebles.precio BETWEEN ${req.query.minPrecio} AND ${req.query.maxPrecio}`;
    }
    if(order == 'high'){
      query += ` ORDER BY precio DESC`;
    }else if(order == 'low'){
      query += ` ORDER BY precio ASC`;
    }
    db.query(query,(err, rows, fields) => {
      if (!err) {
        casas = [];
        rows.forEach((inmueble) => {
          casas.push(inmueble.id);
        });
        db.query("SELECT * FROM imagenes WHERE idCasa = ? AND header = true",[casas],(error, imagen, celdas) => {
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
        });
      } else {
        res.send({
          status: false,
          info: err,
        });
      }
    });
  });
  
  router.get("/filtrar_todo/:idLocalidad/:idBarrio/:idCategoria/:idOperacion/:order/:moneda",(req, res) => {
    const { idLocalidad, idBarrio,idCategoria, idOperacion, order, moneda } = req.params;
    let query = `SELECT partidos.partido, localidades.localidad, barrios.barrio,tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN barrios ON inmuebles.idBarrio = barrios.idBarrio LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE inmuebles.idLocalidad = ${idLocalidad} AND inmuebles.idBarrio = ${idBarrio}  AND idCategoria = ${idCategoria} AND idOperacion = ${idOperacion} AND moneda = '${moneda}'`;
    if(req.query.minPrecio && req.query.maxPrecio){
      query += ` AND inmuebles.precio BETWEEN ${req.query.minPrecio} AND ${req.query.maxPrecio}`;
    }
    if(order == 'high'){
      query += ` ORDER BY precio DESC`;
    }else if(order == 'low'){
      query += ` ORDER BY precio ASC`;
    }
    db.query(query,(err, rows, fields) => {
      if (!err) {
        casas = [];
        rows.forEach((inmueble) => {
          casas.push(inmueble.id);
        });
        if(rows.length==0) return res.send({
          status:true,
          data:[],
          info:'Sin resultados'
        });
        db.query("SELECT * FROM imagenes WHERE idCasa IN (?) AND header = 1",[casas],(error, imagen, celdas) => {
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
        });
      } else {
        res.send({
          status: false,
          info: err,
        });
      }
    });
  });

  router.get("/filtrar_categoria_operacion/:idCategoria/:idOperacion/:order/:moneda",(req, res) => {
    const { idCategoria, idOperacion, order, moneda } = req.params;
    let query = `SELECT partidos.partido, localidades.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ${idCategoria} AND idOperacion = ${idOperacion} AND moneda = '${moneda}'`;
    if(req.query.minPrecio && req.query.maxPrecio){
      query += ` AND inmuebles.precio BETWEEN ${req.query.minPrecio} AND ${req.query.maxPrecio}`;
    }
    if(order == 'high'){
      query += ` ORDER BY precio DESC`;
    }else if(order == 'low'){
      query += ` ORDER BY precio ASC`;
    }
    db.query(query,(err, rows, fields) => {
      if (!err) {
        casas = [];
        rows.forEach((inmueble) => {
          casas.push(inmueble.id);
        });
        db.query("SELECT * FROM imagenes WHERE idCasa = ? AND header = true",[casas],(error, imagen, celdas) => {
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

module.exports = filtrosApi;
