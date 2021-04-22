//const CloudStorage = require('../services/CloudStorage');
const ImagenModel = require('../models/ImagenModel');

class ImageneService{
    constructor() {
        //this.cloudStorage = new CloudStorage();
        this.model = new ImagenModel();
    }
    
    // async agregarImagenes(idCasa,header){
    //     for (let index = 0; index < imagenesArray.length; index++) {
    //         await this.cloudStorage.upload(imagenesArray[index]).then(link=>{
    //             try {
    //                 const subida = await this.model.create(idCasa,link,header);
    //                 console.log('subido');
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         });   
    //     }
    //     return;
    // }

    agregarImagen(idCasa,nombre,header){
        return new Promise(async(resolve, reject) => {
            try {
                const subida = await this.model.create(idCasa,nombre,header);
                resolve(subida)
            } catch (error) {
                reject(error);
            }
        })
    }

    modificarImagen(nombre,id){
        return new Promise(async(resolve, reject) => {
            try {
                const update = await this.model.update(nombre,id);
                resolve(update);
            } catch (error) {
                reject(error);
            }
        })
        
    }

    eliminarImagen(id){
        return new Promise(async(resolve, reject) => {
            try {
                const eliminar = await this.model.delete(id);
                resolve(eliminar)
            } catch (error) {
                reject(error)
            }
        })
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const imagenes = await this.model.getAll();
                resolve(imagenes);
            } catch (error) {
                reject(error);
            }
        })
    }

    getByIdCasa(idCasa){
        return new Promise(async(resolve, reject) => {
            try {
                const imagenes = await this.model.getByIdCasa(idCasa);
                resolve(imagenes);
            } catch (error) {
                reject(error);
            }
        })
    }

    getHeaders(id){
        return new Promise(async(resolve, reject) => {
            try {
                const headers = await this.model.getHeadersByIdCasa(id);
                resolve(headers);
            } catch (error) {
                reject(error);
            }
        })
    }

}

module.exports = ImageneService;