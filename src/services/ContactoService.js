const ContactoModel = require('../models/Contacto');

class ContactoService{
    constructor() {
        this.contactoModel = new ContactoModel();
    }
    
    get(){
        return new Promise(async(resolve, reject) => {
            try {
                const datos = await this.contactoModel.get();
                resolve(datos);
            } catch (error) {
                reject(error);
            }
        });
    }

    update(data,id){
        return new Promise(async(resolve, reject) => {
            try {
                const response = await this.contactoModel.update(data,id);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = ContactoService;