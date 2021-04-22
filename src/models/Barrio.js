const db = require('../database/database');

class BarrioModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT idBarrio, barrio, localidad, bar.idLocalidad FROM barrios as bar, localidades as loc
            WHERE bar.idLocalidad = loc.id ORDER BY bar.idBarrio DESC`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT idBarrio, barrio, localidad, bar.idLocalidad FROM barrios as bar, localidades as loc
            WHERE bar.idLocalidad = loc.id AND bar.idBarrio = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findByLocalidad(idLocalidad){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT idBarrio, barrio, localidad FROM barrios as bar, localidades as loc
            WHERE bar.idLocalidad = loc.id AND bar.idLocalidad = ? ORDER BY bar.idBarrio DESC`,[idLocalidad],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO barrios(barrio,idLocalidad) VALUES (?,?)",
            [body.barrio,body.idLocalidad],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE barrios SET barrio = ?, idLocalidad = ? WHERE idBarrio = ?",
            [body.barrio,body.idLocalidad,id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM barrios WHERE idBarrio=?", [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = BarrioModel;