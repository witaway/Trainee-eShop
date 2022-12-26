const DeletionRequestService = require('../services/deletion-request-service');

const ResponseFormat = require('../helpers/response-format');

class DeletionRequestController {
    static async getRequestsList(req, res) {
        const result = await DeletionRequestService.getAll();
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Deletion requests list got successfully',
                result,
            ),
        );
    }

    static async getRequestByID(req, res) {
        const result = await DeletionRequestService.getByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Deletion request is got successfully',
                result,
            ),
        );
    }

    static async acceptRequestByID(req, res) {
        const result = await DeletionRequestService.acceptByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Deletion request accepted successfully',
                result,
            ),
        );
    }

    static async deleteRequestByID(req, res) {
        await DeletionRequestService.deleteByID(req.params.id);
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Deletion request deleted successfully',
                {},
            ),
        );
    }
}

module.exports = DeletionRequestController;
