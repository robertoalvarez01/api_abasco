const db = require("../database/database");

class QuienesSomosModel{
    get(){
        return new Promise((resolve,reject)=>{
            db.query("SELECT contenido FROM recursos WHERE id = 1",(err, rows, fields) => {
                if (!err) {
                  resolve(rows);
                } else {
                  res.send({
                    status: false,
                    info: err,
                  });
                }
            });
        })
    }

    update(contenido,pass){
        return new Promise((resolve,reject)=>{
            db.query("UPDATE recursos SET contenido = ? WHERE id = 1",[contenido],(err, rows, fields) => {
                if (err) {
                    console.log(err);
                } else {
                    resolve(rows);
                }
            });
        })
    }
}

module.exports = QuienesSomosModel;