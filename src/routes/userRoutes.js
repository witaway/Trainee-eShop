const Router = require("express").Router;
const router = Router();

const UserController = require('../controllers/userController');

router.get('/',        UserController.getList);
router.post('/',       UserController.create);
router.get('/:id',     UserController.getByID);
router.put('/:id',     UserController.updateByID);
router.delete('/:id',  UserController.deleteByID);

module.exports = router