const UserRepository = require('../repositories/user')

class AuthController {
  
    static async list(req, res) {
        const result = await UserRepository.list(req.body);
        res.status(200).json(result);
    }

    static async get(req, res) {
        const result = await UserRepository.get(req.body);
        res.status(200).json(result);
    }
}

module.exports = AuthController