const UserRepository = require('../repositories/user')
const RequestHandlingError = require('../helpers/error')

class UserService {

    static async create(personalInfo) {

        const userWithGivenEmail    = await UserRepository.getByEMail(personalInfo.email)
        const userWithGivenUsername = await UserRepository.getByUsernamee(personalInfo.username)
        
        if(userWithGivenEmail)    throw new RequestHandlingError(403, "This email is already in use.")
        if(userWithGivenUsername) throw new RequestHandlingError(403, "This username is already in use.")
        
        const newUserPersonalInfo = await UserRepository.create(personalInfo)       
        return newUserPersonalInfo
    }

    static async getWithList() {
        const users = await UserRepository.getWithList()
        return users
    }

    static async getByID(userID) {
        const user = await UserRepository.getByID(userID)
        if(!user) throw new RequestHandlingError(404, 'User not found!')
        return user
    }

    static async updateByID(userID, personalInfo) {
        this.getByID(userID)
        const user = await UserRepository.updayeByID(userID, personalInfo)
        return user
    }

    static async deleteByID(userID) {
        this.getByID(userID)
        const user = await UserRepository.deleteByID(userID)
        return user
    }
}

module.exports = UserService