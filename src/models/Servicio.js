const db = require('../database/database');

class ServicioModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM servicios",(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM servicios WHERE idServicio = ?",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body,idInmueble){
        return new Promise((resolve,reject)=>{
            db.query("CALL SP_SERVICIOS_INS_UPD(0,?, ?, ?, ?, ?, ?, ?)",[idInmueble,body.luz, body.internet, body.gas, body.agua, body.calefaccion, body.telefono],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,idInmueble){
        return new Promise((resolve,reject)=>{
            db.query("CALL SP_SERVICIOS_INS_UPD(null,?, ?, ?, ?, ?, ?, ?)",[idInmueble,body.luz, body.internet, body.gas, body.agua, body.calefaccion, body.telefono],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("CALL SP_SERVICIOS_DEL(?)", [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = ServicioModel;