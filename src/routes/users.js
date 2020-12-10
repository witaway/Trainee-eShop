const Router = require("express").Router;
const router = Router();

const UserController = require('../controllers/user')

const tryCatch = require('../helpers/tryCatch');

router.get('/list',  tryCatch(UserController.list));
router.get('/get',   tryCatch(UserController.get));

module.exports = router