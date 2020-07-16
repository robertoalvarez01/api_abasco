const db = require('../database/database');

class ContactoModel{
    get(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM contacto`,(err,res,fields)=>{
                if(err) throw console.log(err);
                resolve(res);
            })
        })
    }

    update(data,id){
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE contacto SET telefonoPrincipal = '${data.telefonoPrincipal}',
                                whatsapp = '${data.whatsapp}',
                                facebook = '${data.facebook}',
                                instagram = '${data.instagram}',
                                direccion = '${data.direccion}'
                    WHERE id = ${id}`,(err,res,fields)=>{
                        if(err) throw console.log(err);
                        resolve(res);
                    });
        })
    };
}

module.exports = ContactoModel;