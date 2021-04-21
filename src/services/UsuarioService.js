const UsuarioModel = require("../models/UsuarioModel");

class UsuarioService {
    constructor() {
        this.model = new UsuarioModel();
    }

    getAll(desde,limite){
        return new Promise(async(resolve, reject) => {
            try {
                const req = await this.model.getAll(desde,limite);
                resolve(req);
            } catch (error) {
                reject(error);
            }
        })
    }

    findById(id){
        return new Promise(async(resolve, reject) => {
            try {
                const user = await this.model.findById(id);
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    }

    findByEmail(email){
        return new Promise(async(resolve, reject) => {
            try {
                const user = await this.model.findByEmail(email);
                resolve(user);
            } catch (error) {
                //console.log(error);
                reject(error);
            }
        })
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const users = await this.model.create(body);
                resolve(users);
            } catch (error) {
                reject(error);
            }
        })
    }

    createAdmin(body){
        return new Promise(async(resolve,reject)=>{
            try {
                const users = await this.model.createAdmin(body);
                resolve(users);
            } catch (error) {
                reject(error);
            }
        })
    }

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const user = await this.model.update(body,id);
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    }

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const req = await this.model.delete(id);
                resolve(req);
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = UsuarioService;