const db = require('../database/database');

class PartidoModel{

    get(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM partidos",(err,res,fields)=>{
                if(err) throw new Error(err);
                resolve(res);
            })
        })    
    }

    getOne(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM partidos WHERE id = ${id}`,(err,res,fields)=>{
                if(err) throw new Error(err);
                resolve(res);
            })
        })
    };

    create(partido){
        return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO partidos (partido) VALUES ('${partido.partido}')`,(err,res,fields)=>{
                if(err) throw new Error(err);
                resolve(res);
            })
        })
    };

    update(partido,id){
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE partidos set partido = '${partido.partido}' WHERE id = ${id}`,(err,res,fields)=>{
                if(err) throw new Error(err);
                resolve(res);
            })
        })
    };

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`DELETE FROM partidos WHERE id = ${id}`,(err,res,fields)=>{
                if(err) throw new Error(err);
                resolve(res);
            })
        })
    }

}

module.exports = PartidoModel;