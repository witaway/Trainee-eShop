const UserService = require('../services/user')

class AuthController {
    
	static async register(req, res) {
		res
            .status(200)
            .json(await UserService.register(req.body));
    }

    static async login(req, res) {
        req, res
    }

    static async logout(req, res) {
        req, res
    }
    
}

module.exports = AuthController