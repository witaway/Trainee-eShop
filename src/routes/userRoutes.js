const Router = require("express").Router;
const router = Router();

const admin = require('../middlewares/isAdmin');

const UserController         = require('../controllers/userController');
const deletionRequestsRouter = require('./deletionRequestRoutes');
const rolesRouter            = require('./roleRoutes');

router.use('/requests/', admin,    deletionRequestsRouter);
router.use('/roles/',    admin,    rolesRouter);

router.get('/',                    UserController.getList);
router.post('/',         admin,    UserController.create);

// Me operations is like :id operations, but applies to current authenticated user.
// As you can see in UserController, getMe and updateMe calls getByID and updateByID inside themselves.
router.get('/me',                  UserController.getMe);
router.put('/me',                  UserController.updateMe);

router.get('/:id',                 UserController.getByID);
router.put('/:id',       admin,    UserController.updateByID);

router.delete('/me',               UserController.sendDeletionRequest);
router.delete('/:id',    admin,    UserController.acceptDeletionRequest);

router.put('/:id/roles/makeAdmin', admin, UserController.giveAdminRoleByID);
router.put('/:id/roles/makeUser',  admin, UserController.revokeAdminRoleByID);

module.exports = router