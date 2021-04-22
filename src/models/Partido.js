const db = require('../database/database');

class PartidoModel{

    get(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM partidos",(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })    
    }

    getOne(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM partidos WHERE id = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO partidos (partido) VALUES ('${body.partido}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE partidos set partido = '${body.partido}' WHERE id = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`DELETE FROM partidos WHERE id = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

}

module.exports = PartidoModel;