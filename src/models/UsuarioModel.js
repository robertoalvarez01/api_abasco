const { config } = require('../../config');
const db = require('../database/database');

class UsuarioModel{
    constructor(){
        this.view = `${config.dbName}.rs_usuarios`;
    }
    getAll(desde,limite){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM ${this.view} LIMIT ${desde},${limite}`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM ${this.view} WHERE ID_USUARIO = '${id}'`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findByEmail(email){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM ${this.view} WHERE EMAIL = "${email}"`,(err,res,fields)=>{
                if(err) {
                    reject(err);
                };
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_USUARIO_INS_UPD(0,'${body.email}','${body.pw}','${body.nombre}','${body.apellido}','${body.foto}',0)`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_USUARIO_INS_UPD(${id},null,null,'${body.nombre}','${body.apellido}','${body.foto}',0)`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

}

module.exports = UsuarioModel;