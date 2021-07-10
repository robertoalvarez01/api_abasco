const CiudadModel = require('../models/Ciudad');

class LocalidadService{
    constructor() {
        this.model = new CiudadModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const ciudades = await this.model.getAll();
                resolve(ciudades);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const ciudad = await this.model.findById(id);
                resolve(ciudad);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newCiudad = await this.model.create(body);
                resolve(newCiudad);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updateCiudad = await this.model.update(body,id);
                resolve(updateCiudad); 
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const delCiudad  = await this.model.delete(id);
                resolve(delCiudad);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = LocalidadService;