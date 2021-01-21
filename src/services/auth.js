const AuthRepository = require('../repositories/auth')
const UserRepository = require('../repositories/user')

const bcrypt = require("bcryptjs");

const RequestHandlingError = require('../helpers/error')

class AuthService {

    static async loginWithEmailAndPassword(email, password) {
        
        const userWithGivenEmail = await UserRepository.getByEMail(email)
        if(!userWithGivenEmail) throw new RequestHandlingError(403, 'User with this email was not found.')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenEmail.password
        );
        if(!matchingResult) throw new RequestHandlingError(403, 'The entered password does not match.');
        
        const token = await AuthRepository.loginById(userWithGivenEmail.id)       
        return token
    }

}

module.exports = AuthService