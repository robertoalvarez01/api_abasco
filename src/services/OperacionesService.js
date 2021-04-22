const OperacionModel = require('../models/Operacion');

class OperacionesService{
    constructor() {
        this.model = new OperacionModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
               const operaciones = await this.model.getAll();
               resolve(operaciones); 
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const operacion = await this.model.findById(id);
                resolve(operacion);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newOperacion = await this.model.create(body);
                resolve(newOperacion);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updateOperacion = await this.model.update(body,id);
                resolve(updateOperacion);
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const delOperacion = await this.model.delete(id);
                resolve(delOperacion);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = OperacionesService;