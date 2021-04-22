const DatoTecnicoModel = require('../models/DatoTecnico');

class DatoTecnicoService{
    constructor() {
        this.model = new DatoTecnicoModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const datoTecnico = await this.model.getAll();
                resolve(datoTecnico);     
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const datoTecnico = await this.model.findById(id);
                resolve(datoTecnico);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newDato = await this.model.create(body);
                resolve(newDato);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body){
        return new Promise(async(resolve, reject) => {
            try {
                const updateDate = await this.model.update(body);
                resolve(updateDate);
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const delDato = await this.model.delete(id);
                resolve(delDato);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = DatoTecnicoService;