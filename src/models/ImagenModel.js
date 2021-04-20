const db = require("../database/database");

class ImagenModel {
    create(id,nombre,header){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO imagenes(idCasa, nombre, header) VALUES (?, ?, ?)",[id, nombre, header],(err, rows, fields) => {
                if(err){
                    throw err;
                }      
                resolve(rows);
            });
        })
    }

    update(nombre,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE imagenes SET nombre =? WHERE id = ?",[nombre, id],(err, rows, fields) => {
                if(err) throw err;
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
                    throw err;
                }
            });
        })
    }

    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM imagenes", [id], (err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                    throw err;
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
                    throw err;
                }
            });
        })
    }
}

module.exports = ImagenModel;