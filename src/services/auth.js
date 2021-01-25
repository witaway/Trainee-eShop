const AuthRepository = require('../repositories/auth')
const UserRepository = require('../repositories/user')

const bcrypt = require("bcryptjs");

const { Unauthorized } = require('../classes/errors')

class AuthService {

    static async loginWithEmailAndPassword(email, password) {
        
        const userWithGivenEmail = await UserRepository.getByEMail(email)
        if(!userWithGivenEmail) throw new Unauthorized('User with this email was not found')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenEmail.password
        );
        if(!matchingResult) throw new Unauthorized('The entered password does not match');
        
        const token = await AuthRepository.loginById(userWithGivenEmail.id)       
        return token
    }

    static async loginWithUsernameAndPassword(username, password) {
        
        const userWithGivenUsername = await UserRepository.getByUsernamee(username)
        if(!userWithGivenUsername) throw new Unauthorized('User with this username was not found')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenUsername.password
        );
        if(!matchingResult) throw new Unauthorized('The entered password does not match');
        
        const token = await AuthRepository.loginById(userWithGivenUsername.id)       
        return token
    }

}

module.exports = AuthService