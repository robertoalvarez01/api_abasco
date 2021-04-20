const QuienesSomosModel = require('../models/QuienesSomos.js');
const path = require('path');

class QuienesSomosService{
    constructor() {
        this.qsModel = new QuienesSomosModel();
    }
    
    async get(){
        const datos = await this.qsModel.get().then(res=>{
            return res;
        });
        return datos;
    }

    async update(contenido){
        const datos = await this.qsModel.update(contenido).then(res=>{
            return res;
        });
        return datos;
    }
}

module.exports = QuienesSomosService;