const db = require("../database/database");

class ImagenModel {
    create(id,nombre,header){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_IMAGENES_INS_UPD(0,${id}, '${nombre}', ${header})`,(err, rows, fields) => {
                if(err) reject(err);    
                resolve(rows);
            });
        })
    }

    update(nombre,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_IMAGENES_INS_UPD(${id},null, '${nombre}', ${header})`,(err, rows, fields) => {
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

    getByIdCasa(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM imagenes WHERE idInmueble = ?", [id], (err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                    reject(err);
                }
            });
        })
    }

    getHeadersByIdCasa(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM imagenes WHERE idInmueble IN (?) AND header = true", [id], (err, rows, fields) => {
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