const Router = require("express").Router;
const router = Router();

const AuthController = require('../controllers/auth')

router.post('/register',  AuthController.register);
router.get('/login',      AuthController.login);
router.get('/logout',     AuthController.logout);

module.exports = router