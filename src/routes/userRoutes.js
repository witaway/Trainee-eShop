const Router = require("express").Router;
const router = Router();

const UserController = require('../controllers/userController');
const deletionRequestsRouter = require('./deletionRequestRoutes');

router.use('/requests/', deletionRequestsRouter);

router.get('/',        UserController.getList);
router.post('/',       UserController.create);

router.get('/me',      UserController.getMe);
router.put('/me',      UserController.updateMe);
router.delete('/me',   UserController.sendDeletionRequest);

router.get('/:id',     UserController.getByID);
router.put('/:id',     UserController.updateByID);
router.delete('/:id',  UserController.acceptDeletionRequest);


module.exports = router