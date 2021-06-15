const db = require("../database/database");

class ImagenModel {
    create(idInmueble,nombre,header){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_IMAGENES_INS_UPD(0,${idInmueble}, '${nombre}', ${header})`,(err, rows, fields) => {
                if(err) reject(err);    
                resolve(rows);
            });
        })
    }

    update(nombre,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_IMAGENES_INS_UPD(${id},null, '${nombre}', null)`,(err, rows, fields) => {
                if(err) reject(err);
                resolve(rows);
            });
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_IMAGENES_DEL(${id})`, (err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                    reject(err);
                }
            });
        })
    }

    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM imagenes", (err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                    reject(err);
                }
            });
        }) 
    }

    getByIdInmueble(idInmueble){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM imagenes WHERE idInmueble = ?", [idInmueble], (err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                    reject(err);
                }
            });
        })
    }

}

module.exports = ImagenModel;