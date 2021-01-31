const DeletionRequest = require('../models/users/deletionRequest')

class DeletionRequestRepository {

    static async create(userID) {
        const request = await DeletionRequest.create({
            userId: userID
        });
        delete request.dataValues.createdAt;
        return request;
    }

    static async getAll() {
        const requests = await DeletionRequest.findAll({
            attributes: [ 'id', 'userId' ],
            raw: true
        });
        return requests;
    }

    static async getByID(requestID) {
        const request = await DeletionRequest.findByPk(requestID, {
            attributes: [ 'id', 'userId' ],
            raw: true
        });
        return request;
    }

    static async getByUserID(userID) {
        const request = await DeletionRequest.findOne({
            attributes: [ 'id', 'userId' ],
            where: { 
                userID: userID
            },
            raw: true
        });
        return request;
    }

    static async deleteByID(requestID) {
        await DeletionRequest.destroy({
            where: {
                id: requestID
            }
        });
    }

    static async deleteByUserID(userID) {
        await DeletionRequest.destroy({
            where: {
                userId: userID
            }
        });
    }

}

module.exports = DeletionRequestRepository