const UserService = require('../services/user')

class AuthController {
    
	static async register(req, res) {
        const result = await UserService.register(req.body);
        res.status(200).json(result);
    }

    static async login(req, res) {
        req, res
    }

    static async logout(req, res) {
        req, res
    }
    
}

module.exports = AuthController