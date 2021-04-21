const AuthModel = require("../models/AuthModel");

class AuthService {
    constructor() {
        this.model = new AuthModel();
    }

    login(email){
        return new Promise(async(resolve, reject) => {
            try {
                const reqLogin = await this.model.login(email);
                resolve(reqLogin);
            } catch (error) {
                reject(error);
            }
        }) 
    }

    getById(id){
        return new Promise(async(resolve, reject) => {
            try {
                const user = await this.model.get(id);
                resolve(user);
            } catch (error) {
                reject(error);
            }            
        })
    }
}

module.exports = AuthService;