const UserService = require('../services/user')

class UserController {
  
    static async create(req, res) {
        const result = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json(result);
    }

    static async getWithList(req, res) {
        const result = await UserService.getWithList();
        res.status(200).json(result);
    }

    static async getByID(req, res) {
        const result = await UserService.getByID(req.params.id);
        res.status(200).json(result);
    }


    static async updateByID(req, res) {
        const result = await UserService.updateByID(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json(result);
    }


    static async deleteByID(req, res) {
        const result = await UserService.deleteByID(req.params.id);
        res.status(200).json(result);
    }
}

module.exports = UserController