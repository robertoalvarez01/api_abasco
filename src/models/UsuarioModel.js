const db = require('../database/database');

class UsuarioModel{
    getAll(desde,limite){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT idUsuario,email,nombre,foto FROM usuarios LIMIT ${desde},${limite}`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM usuarios WHERE idUsuario = '${id}'`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    findByEmail(email){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM usuarios WHERE email = '${email}'`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO usuarios (email,pw,nombre,foto) VALUES ('${body.email}','${body.pw}','${body.nombre}','${body.foto}')`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE usuarios SET email = '${body.email}', pw = '${body.pw}', nombre = '${body.nombre}', foto = '${body.foto}' WHERE idUsuario = ${id}`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`DELETE FROM usuarios WHERE idUsuario = ${id}`,(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        }) 
    }

}

module.exports = UsuarioModel;