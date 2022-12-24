const jwt = require('jsonwebtoken');
const process = require('process');

class AuthRepository {
    static async loginById(userId) {
        return jwt.sign(
            {
                id: userId,
            },
            process.env.JWTPrivateKey,
            {
                expiresIn: 60 * 60,
            },
        );
    }
}

module.exports = AuthRepository;
