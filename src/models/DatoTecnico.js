const db = require('../database/database');

class DatoTecnicoModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM datos_tecnicos",(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM datos_tecnicos WHERE idCasa = ? ",
            [id],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    create(body){
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO datos_tecnicos(idCasa, dormitorios, s_terreno, s_cubierta, s_semicubierta, s_total, cochera, pileta, u_medida) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)",
            [
              body.idCasa,
              body.dormitorios,
              body.s_terreno,
              body.s_cubierta,
              body.s_semicubierta,
              body.s_total,
              body.cochera,
              body.pileta,
              body.u_medida
            ],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    update(body){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE datos_tecnicos SET  dormitorios =?, s_terreno =?, s_cubierta =?, s_semicubierta =?, s_total=?, cochera =?, pileta =?, u_medida = ? WHERE idCasa = ?",[body.dormitorios,body.s_terreno,body.s_cubierta,body.s_semicubierta,body.s_total,body.cochera,body.pileta,body.u_medida,body.idCasa],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query("DELETE FROM datos_tecnicos WHERE id=?",
            [id],(err,res,fields)=>{
                if(err) throw err;
                resolve(res);
            })
        }) 
    }

}

module.exports = DatoTecnicoModel;