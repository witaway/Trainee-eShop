const UserService = require('../services/userService');

class UserController {
  
    static async create(req, res) {
        const result = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.success(200, 'User is created successfully', result);
    }

    static async getList(req, res) {
        const result = await UserService.getList();
        res.success(200, 'Users are got successfully', result);
    }

    static async getByID(req, res) {
        const result = await UserService.getByID(req.params.id);
        res.success(200, 'User is got successfully', result);
    }


    static async updateByID(req, res) {
        const result = await UserService.updateByID(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.success(200, 'User is updated successfully', result);
    }


    static async deleteByID(req, res) {
        const result = await UserService.deleteByID(req.params.id);
        res.success(200, 'User is deleted successfully', result);
    }
}

module.exports = UserController;