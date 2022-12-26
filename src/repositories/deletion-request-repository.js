const DeletionRequest = require('../models/users/deletion-request');

class DeletionRequestRepository {
    static async create(userID) {
        const request = await DeletionRequest.create({
            userId: userID,
        });
        delete request.dataValues.createdAt;
        return request;
    }

    static async getAll() {
        return DeletionRequest.findAll({
            attributes: ['id', 'userId'],
            raw: true,
        });
    }

    static async getByID(requestID) {
        return DeletionRequest.findByPk(requestID, {
            attributes: ['id', 'userId'],
            raw: true,
        });
    }

    static async getByUserID(userID) {
        return DeletionRequest.findOne({
            attributes: ['id', 'userId'],
            where: {
                userID: userID,
            },
            raw: true,
        });
    }

    static async deleteByID(requestID) {
        await DeletionRequest.destroy({
            where: {
                id: requestID,
            },
        });
    }

    static async deleteByUserID(userID) {
        await DeletionRequest.destroy({
            where: {
                userId: userID,
            },
        });
    }
}

module.exports = DeletionRequestRepository;
