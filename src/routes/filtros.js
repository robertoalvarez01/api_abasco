const express = require('express');
const db = require("../database/database");

function filtrosApi(app) {
  const router = express.Router();
  app.use("/",router);

  router.get("/", (req, res) => {
    res.send("Servidor funcionando con exito");
  });

  router.get("/filtrar_operacion/:idOperacion/:order", (req, res) => {
    let { idOperacion, order } = req.params;
    if (order == "normal") {
      db.query(
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idOperacion = ?",
        [idOperacion],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idOperacion = ? ORDER BY precio ASC",
        [idOperacion],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idOperacion = ? ORDER BY precio DESC",
        [idOperacion],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
  
  router.get("/filtrar_categoria/:idCategoria/:order", (req, res) => {
    const { idCategoria, order } = req.params;
    if (order == "normal") {
      db.query(
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ?",
        [idCategoria],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ? ORDER BY precio DESC",
        [idCategoria],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT  ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ? ORDER BY precio ASC",
        [idCategoria],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
  
  router.get("/filtrar_ubicacion/:idLocalidad/:order", (req, res) => {
    const { idLocalidad, order } = req.params;
    if (order == "normal") {
      db.query(
        "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ?",
        [idLocalidad],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ? ORDER BY precio DESC",
        [idLocalidad],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
        "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ? ORDER BY precio ASC",
        [idLocalidad],
        (err, rows, fields) => {
          if (!err) {
            casas = [];
            rows.forEach((inmueble) => {
              casas.push(inmueble.id);
            });
            db.query(
              "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
  
  router.get(
    "/filtrar_todo/:idLocalidad/:idCategoria/:idOperacion/:order/:moneda",
    (req, res) => {
      const { idLocalidad, idCategoria, idOperacion, order, moneda } = req.params;
      if (order == "normal") {
        db.query(
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ? AND idCategoria = ? AND idOperacion = ? AND moneda = ?",
          [idLocalidad, idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ? AND idCategoria = ? AND idOperacion = ? AND moneda = ? ORDER BY precio DESC",
          [idLocalidad, idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idLocalidad = ? AND idCategoria = ? AND idOperacion = ? AND moneda = ? ORDER BY precio ASC",
          [idLocalidad, idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
    }
  );
  
  router.get(
    "/filtrar_categoria_operacion/:idCategoria/:idOperacion/:order/:moneda",
    (req, res) => {
      const { idCategoria, idOperacion, order, moneda } = req.params;
      if (order == "normal") {
        db.query(
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ? AND idOperacion = ? AND moneda = ?",
          [idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ? AND idOperacion = ? AND moneda = ? ORDER BY precio ASC",
          [idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
          "SELECT ubicacion.partido, ubicacion.localidad, tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN ubicacion ON inmuebles.idLocalidad = ubicacion.id LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id WHERE idCategoria = ? AND idOperacion = ? AND moneda = ? ORDER BY precio DESC",
          [idCategoria, idOperacion, moneda],
          (err, rows, fields) => {
            if (!err) {
              casas = [];
              rows.forEach((inmueble) => {
                casas.push(inmueble.id);
              });
              db.query(
                "SELECT * FROM imagenes WHERE idCasa = ? AND header = true",
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
    }
  );
}

module.exports = filtrosApi;
