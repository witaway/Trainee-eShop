const AuthService = require('../services/auth')
const UserService = require('../services/user')

class AuthController {
    
	static async register(req, res) {
        const userObject = await UserService.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.success(200, 'registered successfully', userObject)
    }

    static async loginWithEmailAndPassword(req, res) {
        const token = await AuthService.loginWithEmailAndPassword(
            req.body.email,
            req.body.password
        )
        res.cookie('jwt', token, {
            maxAge: 3600*24
        })
        res.success(200, 'Logged in successfully', { token })
    }

    static async logout(req, res) {
        req.logout()
        res.clearCookie('jwt')
        res.success(200, 'Logged out successfully', {})
    }
    
}

module.exports = AuthController