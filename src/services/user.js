const UserRepository = require('../repositories/user')

class UserService {

    static async register(body) {
        const user = UserRepository.register(body)
        return user
    }

    static async list(body) {
        const users = UserRepository.list(body)
        return users
    }

    static async get(body) {
        const user = UserRepository.get(body)
        return user
    }

}

module.exports = UserService