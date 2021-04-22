const PartidoModel = require('../models/Partido');

class PartidosService{
    constructor() {
        this.partidoModel = new PartidoModel();
    }

    get(){
        return new Promise(async(resolve, reject) => {
            try {
                const partidos = await this.partidoModel.get();
                resolve(partidos);
            } catch (error) {
                reject(error);
            }
        });
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const partido = await this.partidoModel.getOne(id);
                resolve(partido);
            } catch (error) {
                reject(error);
            }
        });
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newPartido = await this.partidoModel.create(body);
                resolve(newPartido);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updatePartido = await this.partidoModel.update(body,id);
                resolve(updatePartido);
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const deletePartido = await this.partidoModel.delete(id);
                resolve(deletePartido);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = PartidosService;