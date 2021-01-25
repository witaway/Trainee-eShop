const Router = require("express").Router;
const router = Router();

const AuthController = require('../controllers/authController')

router.post('/register',  AuthController.register);
router.get('/login',      AuthController.loginWithEmailAndPassword);
router.get('/logout',     AuthController.logout);

module.exports = router;