const ContactoModel = require('../models/Contacto');

class ContactoService{
    constructor() {
        this.contactoModel = new ContactoModel();
    }
    
    async get(){
        const datos = this.contactoModel.get().then(res=>{
            return res;
        });
        return datos;
    }

    async update(data,id){
        const response = this.contactoModel.update(data,id).then(res=>{
            return res;
        });
        return response;
    }
}

module.exports = ContactoService;