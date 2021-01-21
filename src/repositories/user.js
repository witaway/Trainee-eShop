const User          = require('../models/users/user')
const sequelize = require('../loaders/database')

class UserRepository {

    static async getListOfUsers(body) {
        // nothing
        return User.findAll()
    }

    static async getUserByID(userId) {
        return User.findOne({ where: { id: userId } })
    }

    static async getUserByEMail(email) {
        return User.findOne({ where: { email: email } })
    }

    static async getUserByUsernamee(username) {
        return User.findOne({ where: { username: username } })
    }

}

module.exports = UserRepository
