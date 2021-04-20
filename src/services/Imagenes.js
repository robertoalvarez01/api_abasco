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

    async agregarImagen(idCasa,nombre,header){
        try {
            const subida = await this.model.create(idCasa,nombre,header);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async modificarImagen(nombre,id){
        try {
            const update = await this.model.update(nombre,id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async eliminarImagen(id){
        try {
            const eliminar = await this.model.delete(id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getAll(){
        try {
            const imagenes = await this.model.getAll();
            return imagenes;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getByIdCasa(idCasa){
        try {
            const imagenes = await this.model.getByIdCasa(idCasa);
            return imagenes;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = ImageneService;