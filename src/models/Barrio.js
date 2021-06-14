const { config } = require('../../config');
const db = require('../database/database');

class BarrioModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT ID_BARRIO, ID_CIUDAD, CIUDAD, BARRIO FROM ${config.dbName}.vw_rs_barrios ORDER BY ID_BARRIO DESC`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT ID_BARRIO, ID_CIUDAD, CIUDAD, BARRIO FROM ${config.dbName}.vw_rs_barrios WHERE ID_BARRIO = ${id}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findByCiudad(idCiudad){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT ID_BARRIO, ID_CIUDAD, CIUDAD, BARRIO FROM ${config.dbName}.vw_rs_barrios WHERE ID_CIUDAD = ${idCiudad} ORDER BY ID_BARRIO DESC`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_BARRIOS_INS_UPD(0,${body.idCiudad},'${body.barrio}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_BARRIOS_INS_UPD(${id},${body.idCiudad},'${body.barrio}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_BARRIOS_DEL(${id})`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = BarrioModel;