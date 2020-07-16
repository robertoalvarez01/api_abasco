const CloudStorage = require('../services/CloudStorage');
const db = require("../database/database");
class ImageneService{
    constructor() {
        this.cloudStorage = new CloudStorage();
    }
    
    async subirImagenesVarias(imagenesArray,idCasa){
        for (let index = 0; index < imagenesArray.length; index++) {
            await this.cloudStorage.upload(imagenesArray[index]).then(link=>{
                db.query("INSERT INTO imagenes(idCasa, nombre, header) VALUES (?, ?, ?)",[idCasa, link, false],(err, rows, fields) => {
                    if(err){
                        throw new Error(err);
                    }else{
                        console.log('subido');
                    }
                });
            });   
        }
        return;
    }

}

module.exports = ImageneService;