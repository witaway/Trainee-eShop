const AuthRepository = require('../repositories/auth')
const UserRepository = require('../repositories/user')

const bcrypt = require("bcryptjs");

const RequestHandlingError = require('../helpers/error')

class AuthService {

    static async register(personalInfo) {

        const userWithGivenEmail    = await UserRepository.getUserByEMail(personalInfo.email)
        const userWithGivenUsername = await UserRepository.getUserByUsernamee(personalInfo.username)
        
        if(userWithGivenEmail)    throw new RequestHandlingError(403, "This email is already in use.")
        if(userWithGivenUsername) throw new RequestHandlingError(403, "This username is already in use.")
        
        const newUserPersonalInfo = await AuthRepository.register(personalInfo)       
        return newUserPersonalInfo
    }

    static async loginWithEmailAndPassword(email, password) {
        
        const userWithGivenEmail = await UserRepository.getUserByEMail(email)
        if(!userWithGivenEmail) throw new RequestHandlingError(403, 'User with this email was not found.')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenEmail.password
        );
        if(!matchingResult) throw new RequestHandlingError(403, 'The entered password does not match.');
        
        const token = await AuthRepository.loginById(userWithGivenEmail.id)       
        return token
    }

    static async logout(req, res) {
        req, res
    }

}

module.exports = AuthService