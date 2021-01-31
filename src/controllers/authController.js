const AuthService = require('../services/authService')
const UserService = require('../services/userService')

const ResponseFormat = require('../helpers/responseFormat');

class AuthController {
    
	static async register(req, res) {
        const userObject = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(ResponseFormat.success(
            200, 'Registered successfully', userObject
        ));
    }

    static async loginWithEmailAndPassword(req, res) {
        const token = await AuthService.loginWithEmailAndPassword(
            req.body.email,
            req.body.password
        );

        const sec  = 1000;
        const min  = 60 * sec;
        const hour = 60 * min;

        res.cookie('jwt', token, {
            maxAge: 2 * hour
        });

        res.status(200).json(ResponseFormat.success(
            200, 'Logged in successfully', { token }
        ));
    }

    static async logout(req, res) {
        req.logout();
        res.clearCookie('jwt');
        res.status(200).json(ResponseFormat.success(
            200, 'Logged out successfully', {}
        ));
    }
    
}

module.exports = AuthController;