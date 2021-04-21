const QuienesSomosModel = require('../models/QuienesSomos.js');
const path = require('path');

class QuienesSomosService{
    constructor() {
        this.qsModel = new QuienesSomosModel();
    }
    
    async get(){
        return new Promise(async(resolve, reject) => {
            try{
                const datos = await this.qsModel.get();
                resolve(datos);
            }catch(err){
                reject(err);
            }
        })
        
    }

    async update(contenido){
        return new Promise(async(resolve, reject) => {
            try{
                const datos = await this.qsModel.update(contenido);
                resolve(datos);
            }catch(err){
                reject(err);
            }
        })
        
    }
}

module.exports = QuienesSomosService;