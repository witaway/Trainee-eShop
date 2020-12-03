const User          = require('../models/users/user')
const sequelize = require('../loaders/database')

class MarkRepository {

    static async register(body) {
        console.log(body)
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

    static async get(body) {
        // body.userId
        return User.findOne({
            where: {
                userId: body.userId
            }
        })
    }

}

module.exports = MarkRepository