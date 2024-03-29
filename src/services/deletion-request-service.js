const DeletionRequestRepository = require('../repositories/deletion-request-repository');
const UserService = require('./user-service');

const Mailer = require('../classes/mailer');
const {
    ConflictException,
    NotFoundException,
} = require('../classes/errors/4xx');

class DeletionRequestService {
    static async create(userID) {
        try {
            // If request is already does not exists getByUserID will throw exception
            await DeletionRequestService.getByUserID(userID);
        } catch (err) {
            // If exception was thrown, deletion request doesn't exists and we can creare it. COOL!
            return await DeletionRequestRepository.create(userID);
        }
        // So if exception was not thrown, deletion request exist, and that's why we throw exception
        throw new ConflictException('Deletion request is already created');
    }

    static async getAll() {
        return DeletionRequestRepository.getAll();
    }

    static async getByID(requestID) {
        const request = await DeletionRequestRepository.getByID(requestID);
        if (!request) {
            throw new NotFoundException('Request is not found');
        }
        return request;
    }

    static async getByUserID(userID) {
        const request = await DeletionRequestRepository.getByUserID(userID);
        if (!request) {
            throw new NotFoundException('Request is not found');
        }
        return request;
    }

    static async deleteByID(requestID) {
        await DeletionRequestService.getByID(requestID); // To check exceptions
        await DeletionRequestRepository.deleteByID(requestID);
    }

    static async deleteByUserID(userID) {
        await DeletionRequestService.getByUserID(userID); // To check exceptions
        await DeletionRequestRepository.deleteByUserID(userID);
    }

    static async acceptByID(requestID) {
        const deletionRequest = await DeletionRequestService.getByID(requestID);

        const userID = deletionRequest.userId;
        const userObject = await UserService.getByID(userID);

        Mailer.sendMail(
            userObject.dataValues.email,
            'Good bye! :(',
            'Your account is deleted successfully',
        );

        await DeletionRequestRepository.deleteByID(requestID);
        await UserService.deleteByID(userID);
    }
}

module.exports = DeletionRequestService;
