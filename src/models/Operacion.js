const db = require('../database/database');

class OperacionModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM tipo_operacion",(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM tipo_operacion WHERE id = ?",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO tipo_operacion(operacion) VALUES (?)",[body.operacion],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE tipo_operacion SET operacion = ? WHERE id = ?",[body.operacion, id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM tipo_operacion WHERE id=?",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = OperacionModel;