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
            db.query("SELECT * FROM servicios WHERE id = ?",[id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }
    
    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO servicios(idCasa, luz, agua, calefaccion, telefono, gas, internet) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [body.idCasa, body.luz, body.agua, body.calefaccion, body.telefono, body.gas, body.internet],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE servicios SET  luz =?, agua =?, calefaccion =?, telefono=?, gas=?, internet=? WHERE idCasa = ?",
            [body.luz, body.agua, body.calefaccion, body.telefono, body.gas, body.internet, body.idCasa],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM servicios WHERE id=?", [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = ServicioModel;