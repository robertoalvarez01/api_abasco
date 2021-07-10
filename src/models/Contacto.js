const db = require('../database/database');

class ContactoModel{
    get(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM contacto`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    create(data){
        return new Promise((resolve,reject)=>{
            db.query("CALL SP_CONTACTO_INS_UPD(?,?,?,?,?,?)",[0,data.telefonoPrincipal,data.whatsapp,data.facebook,data.instagram,data.direccion],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            });
        })
    };

    update(data,id){
        return new Promise((resolve,reject)=>{
            db.query("CALL SP_CONTACTO_INS_UPD(?,?,?,?,?,?)",[id,data.telefonoPrincipal,data.whatsapp,data.facebook,data.instagram,data.direccion],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            });
        })
    };
}

module.exports = ContactoModel;
