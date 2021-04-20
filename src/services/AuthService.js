const AuthModel = require("../models/AuthModel");

class AuthService {
    constructor() {
        this.model = new AuthModel();
    }

    async login(email){
        try {
            const reqLogin = await this.model.login(email);
            return reqLogin;
        } catch (error) {
            return false;
        }
    }

    async getById(id){
        try {
            const user = await this.model.get(id);
            return user;
        } catch (error) {
            return false;
        }
    }
}

module.exports = AuthService;