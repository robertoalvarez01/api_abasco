const db = require('../database/database');

class InmuebleModel{
    getAll(admin,desde,cantidad){
        let query = "SELECT  partidos.partido, localidades.localidad, barrios.barrio ,tipo_operacion.operacion, categorias.categoria, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN barrios ON inmuebles.idBarrio = barrios.idBarrio LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id ";
        if(!admin){
          query += "WHERE activo = 1 ";
        }
        if (order == "normal") {
          query+=`ORDER BY inmuebles.id DESC LIMIT ${desde},?`;
        } else if (order == "high") {
          query+=`ORDER BY inmuebles.precio DESC LIMIT ${desde},?`;
        } else if (order == "low") {
          query+=`ORDER BY inmuebles.precio ASC LIMIT ${desde},?`;
        }
        return new Promise((resolve,reject)=>{
            db.query(query,[cantidad],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT partidos.partido, localidades.localidad, barrios.barrio,tipo_operacion.operacion, categorias.categoria,servicios.*, datos_tecnicos.*, inmuebles.* FROM inmuebles LEFT JOIN partidos ON inmuebles.idPartido = partidos.id LEFT JOIN localidades ON inmuebles.idLocalidad = localidades.id LEFT JOIN barrios ON inmuebles.idBarrio = barrios.idBarrio LEFT JOIN categorias ON inmuebles.idCategoria = categorias.id LEFT JOIN tipo_operacion ON inmuebles.idOperacion = tipo_operacion.id LEFT JOIN servicios ON inmuebles.id = servicios.idCasa LEFT JOIN datos_tecnicos ON inmuebles.id = datos_tecnicos.idCasa WHERE inmuebles.id = ?;",[id],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO inmuebles(idOperacion, precio, idPartido,idLocalidad, idBarrio,direccion, idCategoria, descripcion, estado, mostrarEstado,moneda,lat,lon,activo) VALUES (?, ? , ?, ?, ? , ?, ?, ?, ?, ?, ?,?,?,0)",
            [
                body.idOperacion,
                body.precio,
                body.idPartido,
                body.idLocalidad,
                body.idBarrio,
                body.direccion,
                body.idCategoria,
                body.descripcion,
                body.estado,
                body.mostrarEstado,
                body.moneda,
                body.lat,
                body.lon
            ],(err,res,fields)=>{
                if(err) throw err;
                db.query("SELECT id FROM inmuebles ORDER BY id DESC LIMIT 1",(error, filas, celdas) => {
                    if (!error) {
                      resolve(filas);
                    } else {
                      throw error;
                    }
                })
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE inmuebles SET idOperacion = ?, precio = ?, idPartido = ? ,idLocalidad = ?, idBarrio=?, direccion = ?, idCategoria = ?, descripcion = ?, estado = ?, mostrarEstado = ?,moneda = ?, lat = ?, lon = ? WHERE id = ?",
            [
                body.idOperacion,
                body.precio,
                body.idPartido,
                body.idLocalidad,
                body.idBarrio,
                body.direccion,
                body.idCategoria,
                body.descripcion,
                body.estado,
                body.mostrarEstado,
                body.moneda,
                body.lat,
                body.lon,
	            id
            ],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    updateEstado(id){
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE inmuebles SET activo = !activo WHERE id = ${id};`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM datos_tecnicos WHERE idCasa = ?;DELETE FROM servicios WHERE idCasa = ?;DELETE FROM imagenes WHERE idCasa = ?;DELETE FROM inmuebles WHERE id = ?;",
            [id, id, id, id],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        }) 
    }

}

module.exports = InmuebleModel;