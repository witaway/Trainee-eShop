const Router = require("express").Router;
const router = Router();

const AuthController = require('../controllers/auth')
const tryCatch = require('../helpers/tryCatch');

router.post('/register',  tryCatch(AuthController.register));
router.get('/login',      tryCatch(AuthController.login));
router.get('/logout',     tryCatch(AuthController.logout));

module.exports = router