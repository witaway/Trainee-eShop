const UserRepository = require('../repositories/user')

class AuthController {
    
	static async list(req, res) {
		try {
            return res
                .status(200)
                .json(await UserRepository.list(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
		}
    }

    static async get(req, res) {
		try {
            return res
                .status(200)
                .json(await UserRepository.get(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
		}
    }

    
}

module.exports = AuthController