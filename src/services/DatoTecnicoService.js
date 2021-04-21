const DatoTecnicoModel = require('../models/DatoTecnico');

class DatoTecnicoService{
    constructor() {
        this.model = new DatoTecnicoModel();
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

    async update(body){
        return this.model.update(body).then(res=>{
            return res;
        })
    };

    async delete(id){
        return this.model.delete(id).then(res=>{
            return res;
        })
    }
    
}

module.exports = DatoTecnicoService;