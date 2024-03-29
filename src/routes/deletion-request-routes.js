const Router = require('express').Router;
const router = Router();

const DeletionRequestController = require('../controllers/deletion-requests-controller');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/deletion-requests-schemas');

router.get(
    '/',
    validator(schemas.getRequestsList),
    DeletionRequestController.getRequestsList,
);
router.get(
    '/:id',
    validator(schemas.getRequestByID),
    DeletionRequestController.getRequestByID,
);
router.get(
    '/:id/accept',
    validator(schemas.acceptRequestByID),
    DeletionRequestController.acceptRequestByID,
);
router.delete(
    '/:id',
    validator(schemas.deleteRequestByID),
    DeletionRequestController.deleteRequestByID,
);

module.exports = router;
