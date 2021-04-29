const LocalidadModel = require('../models/Localidad');

class LocalidadService{
    constructor() {
        this.model = new LocalidadModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const localidades = await this.model.getAll();
                resolve(localidades);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const localidad = await this.model.findById(id);
                resolve(localidad);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newLocalidad = await this.model.create(body);
                resolve(newLocalidad);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updateLocalidad = await this.model.update(body,id);
                resolve(updateLocalidad); 
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const delLocalidad  = await this.model.delete(id);
                resolve(delLocalidad);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = LocalidadService;