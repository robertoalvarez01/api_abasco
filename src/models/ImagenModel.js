const db = require("../database/database");

class ImagenModel {
    create(id,nombre,header){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO imagenes(idCasa, nombre, header) VALUES (?, ?, ?)",[id, nombre, header],(err, rows, fields) => {
                if(err) reject(err);    
                resolve(rows);
            });
        })
    }

    update(nombre,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE imagenes SET nombre =? WHERE id = ?",[nombre, id],(err, rows, fields) => {
                if(err) reject(err);
                resolve(rows);
            });
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM imagenes WHERE id=?", [id], (err, rows, fields) => {
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
            db.query("SELECT * FROM imagenes WHERE idCasa = ?", [id], (err, rows, fields) => {
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
            db.query("SELECT * FROM imagenes WHERE idCasa IN (?) AND header = true", [id], (err, rows, fields) => {
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