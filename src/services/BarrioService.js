const BarrioModel = require('../models/Barrio');

class BarriosService{
    constructor() {
        this.model = new BarrioModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const barrios = await this.model.getAll();
                resolve(barrios);
            } catch (error) {
                reject(error);
            }  
        })
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const barrio = await this.model.findById(id);
                resolve(barrio);
            } catch (error) {
                reject(error);
            }
        })
    }

    getByLocalidad(idLocalidad){
        return new Promise(async(resolve, reject) => {
            try {
                const barrios = await this.model.findByLocalidad(idLocalidad);
                resolve(barrios);
            } catch (error) {
                reject(error);
            }  
        })
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newBarrio = await this.model.create(body);
                resolve(newBarrio);
            } catch (error) {
                reject(error);
            }
        })
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updateBarrio = await this.model.update(body,id);
                resolve(updateBarrio);
            } catch (error) {
                reject(error);
            }
        })
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try{
                const delBarrio = await this.model.delete(id);
                resolve(delBarrio);
            }catch(err){
                reject(err);
            }
        })
    }
    
}

module.exports = BarriosService;