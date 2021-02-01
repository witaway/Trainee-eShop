const jwt     = require("jsonwebtoken");
const process = require('process');

class AuthRepository {

    static async loginById(userId) {
        
        const token = jwt.sign({
            id: userId,
        }, process.env.JWTPrivateKey, { 
            expiresIn: 60*60
        });

        return token;
    }

}

module.exports = AuthRepository;