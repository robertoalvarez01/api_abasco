const UsuarioModel = require("../models/UsuarioModel");

class UsuarioService {
    constructor() {
        this.model = new UsuarioModel();
    }

    async getAll(desde,limite){
        try {
            const req = await this.model.getAll(desde,limite);
            return req;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findById(id){
        try {
            const user = await this.model.findById(id);
            return user;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findByEmail(email){
        try {
            const user = await this.model.findByEmail(email);
            return user;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async create(body){
        try {
            const users = await this.model.create(body);
            return users;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async update(body,id){
        try {
            const user = await this.model.update(body,id);
            return user;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async delete(id){
        try {
            const req = await this.model.delete(id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = UsuarioService;