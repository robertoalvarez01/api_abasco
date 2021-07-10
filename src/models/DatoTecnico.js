const db = require('../database/database');

class DatoTecnicoModel{
    getAll(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM datos_tecnicos",(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    findById(id){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM datos_tecnicos WHERE idInmueble = ? ",
            [id],(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    create(body,idInmueble){
        return new Promise((resolve,reject)=>{
<<<<<<< HEAD
            db.query("INSERT INTO datos_tecnicos(idCasa, dormitorios, s_terreno, s_cubierta, s_semicubierta, s_total, cochera, pileta, u_medida,baños) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)",
            [
              body.idCasa,
              body.dormitorios,
              body.s_terreno,
              body.s_cubierta,
              body.s_semicubierta,
              body.s_total,
              body.cochera,
              body.pileta,
              body.u_medida,
              body.baños
            ],(err,res,fields)=>{
=======
            db.query(`CALL SP_DT_INS_UPD(0,${idInmueble},${body.dormitorios},${body.cochera},${body.pileta},'${body.s_total}','${body.s_cubierta}','${body.u_medida}')`,(err,res,fields)=>{
>>>>>>> 998633b29cd60cf3a38348bc1f5fd5460ed0f499
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    update(body,idInmueble){
        return new Promise((resolve,reject)=>{
<<<<<<< HEAD
            db.query("UPDATE datos_tecnicos SET  dormitorios =?, s_terreno =?, s_cubierta =?, s_semicubierta =?, s_total=?, cochera =?, pileta =?, u_medida = ?, baños = ? WHERE idCasa = ?",[body.dormitorios,body.s_terreno,body.s_cubierta,body.s_semicubierta,body.s_total,body.cochera,body.pileta,body.u_medida,body.baños,body.idCasa],(err,res,fields)=>{
=======
            db.query(`CALL SP_DT_INS_UPD(${idInmueble},${idInmueble},${body.dormitorios},${body.cochera},${body.pileta},'${body.s_total}','${body.s_cubierta}','${body.u_medida}')`,(err,res,fields)=>{
>>>>>>> 998633b29cd60cf3a38348bc1f5fd5460ed0f499
                if(err) reject(err);
                resolve(res);
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            db.query(`CALL SP_DT_DEL(${id})`,(err,res,fields)=>{
                if(err) reject(err);
                resolve(res);
            })
        }) 
    }

}

module.exports = DatoTecnicoModel;