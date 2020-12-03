const Router = require("express").Router;
const router = Router();

const UserController = require('../controllers/user')

router.get('/list',  UserController.list);
router.get('/get',   UserController.get);

module.exports = router