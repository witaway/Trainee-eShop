const UserRepository = require('../repositories/user')

class AuthController {
    
	static async register(req, res) {
		try {
            return res
                .status(200)
                .json(await UserRepository.register(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
		}
    }

    static async login(req, res) {
        req, res
    }

    static async logout(req, res) {
        req, res
    }
    
}

module.exports = AuthController