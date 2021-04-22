const ServicioModel = require('../models/Servicio');

class ServicioService{
    constructor() {
        this.model = new ServicioModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const servicios = await this.model.getAll();
                resolve(servicios);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const servicio = await this.model.findById(id);
                resolve(servicio);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newServicio = await this.model.create(body);
                resolve(newServicio);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body){
        return new Promise(async(resolve, reject) => {
            try {
                const updateServicio = await this.model.update(body);
                resolve(updateServicio);
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const deleteServicio = await this.model.delete(id);
                resolve(deleteServicio);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = ServicioService;