const AuthService = require('../services/auth')

class AuthController {
    
	static async register(req, res) {
        const userObject = await AuthService.register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(userObject);
    }

    static async loginWithEmailAndPassword(req, res) {
        const token = await AuthService.loginWithEmailAndPassword(
            req.body.email,
            req.body.password
        )
        res.cookie('jwt', token, {
            maxAge: 3600*24
        })
        res.status(200).json(token)
    }

    static async logout(req, res) {
        req.logout()
        res.clearCookie('jwt')
        res.status(200).json({
            message: 'Logged out successfully!'
        })
    }
    
}

module.exports = AuthController