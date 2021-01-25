const Router = require("express").Router;
const router = Router();

const UserController = require('../controllers/userController');

const tryCatch = require('../helpers/tryCatch');

router.get('/',        tryCatch(UserController.getList));
router.post('/',       tryCatch(UserController.create));

router.get('/:id',     tryCatch(UserController.getByID));
router.put('/:id',     tryCatch(UserController.updateByID));
router.delete('/:id',  tryCatch(UserController.deleteByID));

module.exports = router