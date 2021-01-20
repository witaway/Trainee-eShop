const User          = require('../models/users/user')
const sequelize = require('../loaders/database')

class UserRepository {

    static async register(body) {
        // body.username, body.email, body.password
        const userByUsername = await User.findOne({
            where: {
                username: body.username
            }
        })
        const userByEmail = await User.findOne({
            where: {
                email: body.email
            }
        })
        if(userByEmail == null && userByUsername == null) {
            return User.create({ 
                username:  body.username,
                email:     body.email,
                password:  body.password
            })
        } else {
            return {
                'error': 'username or email is already taken :('
            }
        }
    }

    static async list(body) {
        // nothing
        return User.findAll()
    }

    static async getUser(userId) {
        // body.userId
        return User.findOne({
            where: {
                userId: userId
            }
        })
    }

}

module.exports = UserRepository
