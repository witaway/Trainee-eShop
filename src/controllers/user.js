const UserRepository = require('../repositories/user')

class AuthController {
  
    static async list(req, res) {
        res
            .status(200)
            .json(await UserRepository.list(req.body));
    }

    static async get(req, res) {
        res
            .status(200)
            .json(await UserRepository.get(req.body));
    }
}

module.exports = AuthController