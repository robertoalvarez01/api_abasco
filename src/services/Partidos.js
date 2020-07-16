const PartidoModel = require('../models/Partido');

class PartidosService{
    constructor() {
        this.partidoModel = new PartidoModel();
    }

    async get(){
        return this.partidoModel.get().then(res=>{
            return res;
        })
    }

    async getOne(id){
        return this.partidoModel.getOne(id).then(res=>{
            return res;
        })
    }

    async create(partido){
        return this.partidoModel.create(partido).then(res=>{
            return res;
        })
    };

    async update(partido,id){
        return this.partidoModel.update(partido,id).then(res=>{
            return res;
        })
    };

    async delete(id){
        return this.partidoModel.delete(id).then(res=>{
            return res;
        })
    }
    
}

module.exports = PartidosService;