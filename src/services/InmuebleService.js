const InmuebleModel = require('../models/Inmueble');

class InmuebleService{
    constructor() {
        this.model = new InmuebleModel();
    }

    async getAll(admin,desde,cantidad,order,filtros){
        return new Promise(async(resolve, reject) => {
          try {
            const inmuebles = await this.model.getAll(admin,desde,cantidad,order,filtros);
            resolve(inmuebles);    
          } catch (error) {
            reject(error);
          }  
        })
    }

    async getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const inmueble = await this.model.findById(id);
                resolve(inmueble);     
            } catch (error) {
                reject(error);
            }  
        });
    }

    async create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const create = await this.model.create(body);
                resolve(create);      
            } catch (error) {
                reject(error);
            }  
        })
    };

    async update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const up = await this.model.update(body,id);
                resolve(up);      
            } catch (error) {
                reject(error);
            }  
        })
    };

    async updateEstado(id){
        return new Promise(async(resolve, reject) => {
            try {
                const updated = await this.model.updateEstado(id);
                resolve(updated)
            } catch (error) {
                reject(error);
            }  
        })
    };

    async delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const del = await this.model.delete(id);
                resolve(del);
            } catch (error) {
                reject(error);
            }  
        })
    }
    
}

module.exports = InmuebleService;