const UserRepository = require('../repositories/userRepository');
const { ConflictException, NotFoundException } = require('../classes/errors/4xx');

class UserService {

    static async create(personalInfo) {

        const userWithGivenEmail    = await UserRepository.getByEMail(personalInfo.email);
        const userWithGivenUsername = await UserRepository.getByUsername(personalInfo.username);
        
        if(userWithGivenEmail) {
            throw new ConflictException("This email is already in use");
        }
        if(userWithGivenUsername) {
            throw new ConflictException("This username is already in use");
        }

        const newUserPersonalInfo = await UserRepository.create(personalInfo);  
        return newUserPersonalInfo;
    }

    static async getList() {
        const users = await UserRepository.getList();
        return users;
    }

    static async getByID(userID) {
        const user = await UserRepository.getByID(userID);
        if(!user) {
            throw new NotFoundException('User is not found');
        }
        return user;
    }

    static async updateByID(userID, personalInfo) {
        await UserService.getByID(userID);
        const user = await UserRepository.updateByID(userID, personalInfo);
        return user;
    }

    static async deleteByID(userID) {
        await UserService.getByID(userID);
        await UserRepository.deleteByID(userID);
    }
    
}

module.exports = UserService;