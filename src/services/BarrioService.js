const BarrioModel = require('../models/Barrio');

class BarriosService{
    constructor() {
        this.model = new BarrioModel();
    }

    async getAll(){
        return this.model.getAll().then(res=>{
            return res;
        })
    }

    async getOne(id){
        return this.model.findById(id).then(res=>{
            return res;
        })
    }

    async create(body){
        return this.model.create(body).then(res=>{
            return res;
        })
    };

    async update(body,id){
        return this.model.update(body,id).then(res=>{
            return res;
        })
    };

    async delete(id){
        return this.model.delete(id).then(res=>{
            return res;
        })
    }
    
}

module.exports = BarriosService;