const db = require('../database/database');

class CiudadModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM rs_ciudades`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM rs_ciudades WHERE ID_CIUDAD = ?`,[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_CIUDADES_INS_UPD(0,${body.idPartido},'${body.ciudad}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_CIUDADES_INS_UPD(${id},${body.idPartido},'${body.ciudad}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_CIUDADES_DEL(?)`, [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = CiudadModel;