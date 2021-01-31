const UserService = require('../services/userService');
const DeletionRequestService = require('../services/deletionRequestService')

const ResponseFormat = require('../helpers/responseFormat');

class UserController {
  
    static async create(req, res) {
        const result = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json(ResponseFormat.success(
            200, 'User is created successfully', result
        )); 
    }

    static async getList(req, res) {
        const result = await UserService.getList();
        res.status(200).json(ResponseFormat.success(
            200, 'Users are got successfully', result
        )); 
    }

    static async getByID(req, res) {
        const result = await UserService.getByID(req.params.id);
        res.status(200).json(ResponseFormat.success(
            200, 'User is got successfully', result
        )); 
    }

    static async getMe(req, res) {
        console.log(req.user);
        req.params.id = req.user;
        UserController.getByID(req, res);
    }

    static async updateByID(req, res) {
        const result = await UserService.updateByID(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json(ResponseFormat.success(
            200, 'User is updated successfully', result
        )); 
    }

    static async updateMe(req, res) {
        req.params.id = req.user;
        UserController.updateByID(req, res);
    }

    static async sendDeletionRequest(req, res) {
        const result = await DeletionRequestService.create(req.user);
        res.status(200).json(ResponseFormat.success(
            200, 'Deletion request created successfully', result
        ));
    }

    static async acceptDeletionRequest(req, res) {
        
        const userID = req.params.id;
        await DeletionRequestService.deleteByUserID(userID);
        await UserService.deleteByID(userID)

        res.status(200).json(ResponseFormat.success(
            200, 'User is deleted successfully', {}
        )); 
    }
    
}

module.exports = UserController;