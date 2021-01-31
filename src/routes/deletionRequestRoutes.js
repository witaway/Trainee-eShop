const Router = require("express").Router;
const router = Router();

const DeletionRequestController = require('../controllers/deletionRequestsController');

router.get('/',            DeletionRequestController.getRequestsList);
router.get('/:id',         DeletionRequestController.getRequestByID);
router.get('/:id/accept',  DeletionRequestController.acceptRequestByID);
router.delete('/:id',      DeletionRequestController.deleteRequestByID);

module.exports = router;