const CategoriaModel = require('../models/Categoria');

class CategoriaService{
    constructor() {
        this.model = new CategoriaModel();
    }

    getAll(){
        return new Promise(async(resolve, reject) => {
            try {
                const categorias = await this.model.getAll();
                resolve(categorias)
            } catch (error) {
                reject(error);
            }
        })
    }

    getOne(id){
        return new Promise(async(resolve, reject) => {
            try {
                const categoria = await this.model.findById(id);
                resolve(categoria);
            } catch (error) {
                reject(error);
            }
        })
    }

    search(name){
        return new Promise(async(resolve, reject) => {
            try {
                const categoria = await this.model.findByNombre(name);
                resolve(categoria);
            } catch (error) {
                reject(error);
            }
        })
    }

    create(body){
        return new Promise(async(resolve, reject) => {
            try {
                const newCategoria = await this.model.create(body);
                resolve(newCategoria);
            } catch (error) {
                reject(error);
            }
        });
    };

    update(body,id){
        return new Promise(async(resolve, reject) => {
            try {
                const updateCategoria = await this.model.update(body,id);
                resolve(updateCategoria);
            } catch (error) {
                reject(error);
            }
        });
    };

    delete(id){
        return new Promise(async(resolve, reject) => {
            try {
                const delCategoria = await this.model.delete(id);
                resolve(delCategoria);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

module.exports = CategoriaService;