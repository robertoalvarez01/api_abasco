const db = require('../database/database');

class AuthModel{
    login(email){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM usuarios WHERE email = '${email}'`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    get(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT email,nombre,telefono,foto FROM usuarios WHERE idUsuario = '${id}'`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

}

module.exports = AuthModel;