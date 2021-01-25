const AuthRepository = require('../repositories/auth')
const UserRepository = require('../repositories/user')

const bcrypt = require("bcryptjs");

const { UnauthorizedException } = require('../classes/errors/4xx')

class AuthService {

    static async loginWithEmailAndPassword(email, password) {
        
        const userWithGivenEmail = await UserRepository.getByEMail(email)
        if(!userWithGivenEmail) throw new UnauthorizedException('User with this email was not found')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenEmail.password
        );
        if(!matchingResult) throw new UnauthorizedException('The entered password does not match');
        
        const token = await AuthRepository.loginById(userWithGivenEmail.id)       
        return token
    }

    static async loginWithUsernameAndPassword(username, password) {
        
        const userWithGivenUsername = await UserRepository.getByUsernamee(username)
        if(!userWithGivenUsername) throw new UnauthorizedException('User with this username was not found')

        const matchingResult = bcrypt.compareSync(
            password,
            userWithGivenUsername.password
        );
        if(!matchingResult) throw new UnauthorizedException('The entered password does not match');
        
        const token = await AuthRepository.loginById(userWithGivenUsername.id)       
        return token
    }

}

module.exports = AuthService