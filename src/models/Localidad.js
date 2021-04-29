const db = require('../database/database');

class LocalidadModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT localidad.id,localidad.idPartido,partido,localidad FROM localidades AS localidad, partidos as partido 
            where localidad.idPartido = partido.id`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT localidad.id,localidad.idPartido,partido,localidad FROM localidades AS localidad, partidos as partido WHERE localidad.idPartido = partido.id AND localidad.id LIKE ? ",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO localidades(idPartido, localidad) VALUES (? , ?)",[body.idPartido, body.localidad],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE localidades SET idPartido = ? , localidad = ? WHERE id = ?",
            [body.idPartido, body.localidad,id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM localidades WHERE id=?", [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = LocalidadModel;