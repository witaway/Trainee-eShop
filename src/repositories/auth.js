const User = require('../models/users/user')

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const process = require('process');

class AuthRepository {

    static async register(personalInfo) {
        
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;
        
        const user = User.create({
          username: personalInfo.username,
          email:    personalInfo.email,
          password: bcrypt.hashSync(password, salt),
        });

        return user;
    }

    static async loginById(userId) {
        
        const token = jwt.sign({
            id: userId,
        }, process.env.JWTPrivateKey, { 
            expiresIn: 60*60
        });

        return token;
    }

}

module.exports = AuthRepository