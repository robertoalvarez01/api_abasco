const db = require('../database/database');

class CategoriaModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM categorias`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM categorias WHERE id LIKE ? ",
            [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findByNombre(categoria){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM categorias WHERE categoria LIKE ? ",
            [categoria],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO categorias(categoria) VALUES (?)",
            [body.categoria],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,id){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE categorias SET categoria = ? WHERE id = ?",
            [body.categoria, id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM categorias WHERE id=?", [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = CategoriaModel;