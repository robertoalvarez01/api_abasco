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

    async create(body){
        return this.partidoModel.create(body).then(res=>{
            return res;
        })
    };

    async update(body,id){
        return this.partidoModel.update(body,id).then(res=>{
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