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

    async update(contenido,pass){
        const datos = await this.qsModel.update(contenido,pass).then(res=>{
            return res;
        });
        return datos;
    }
}

module.exports = QuienesSomosService;