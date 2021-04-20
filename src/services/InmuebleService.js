const InmuebleModel = require('../models/Inmueble');

class InmuebleService{
    constructor() {
        this.model = new InmuebleModel();
    }

    async getAll(admin,desde,cantidad){
        return this.model.getAll(admin,desde,cantidad).then(res=>{
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

    async updateEstado(id){
        return this.model.updateEstado(id).then(res=>{
            return res;
        })
    };

    async delete(id){
        return this.model.delete(id).then(res=>{
            return res;
        })
    }
    
}

module.exports = InmuebleService;