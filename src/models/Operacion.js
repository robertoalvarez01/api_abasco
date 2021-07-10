const db = require('../database/database');

class OperacionModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM operaciones",(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM operaciones WHERE idOperacion = ?",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_OPERACIONES_INS_UPD(0,'${body.operacion}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_OPERACIONES_INS_UPD(${id},'${body.operacion}')`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_OPERACIONES_DEL(${id})`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = OperacionModel;