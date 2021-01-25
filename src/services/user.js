const UserRepository = require('../repositories/user')
const { Conflict, NotFound } = require('../classes/errors')

class UserService {

    static async create(personalInfo) {

        const userWithGivenEmail    = await UserRepository.getByEMail(personalInfo.email)
        const userWithGivenUsername = await UserRepository.getByUsernamee(personalInfo.username)
        
        if(userWithGivenEmail)    throw new Conflict("This email is already in use")
        if(userWithGivenUsername) throw new Conflict("This username is already in use")
        
        const newUserPersonalInfo = await UserRepository.create(personalInfo)       
        return newUserPersonalInfo
    }

    static async getWithList() {
        const users = await UserRepository.getWithList()
        return users
    }

    static async getByID(userID) {
        const user = await UserRepository.getByID(userID)
        if(!user) throw new NotFound('User is not found')
        return user
    }

    static async updateByID(userID, personalInfo) {
        this.getByID(userID)
        const user = await UserRepository.updateByID(userID, personalInfo)
        return user
    }

    static async deleteByID(userID) {
        this.getByID(userID)
        const user = await UserRepository.deleteByID(userID)
        return user
    }
}

module.exports = UserService