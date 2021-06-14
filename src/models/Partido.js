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
            db.query(`SELECT * FROM partidos WHERE idPartido = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_PARTIDOS_INS_UPD(0,'${body.partido}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_PARTIDOS_INS_UPD(${id},'${body.partido}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    };

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_PARTIDOS_DEL(${id})`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

}

module.exports = PartidoModel;