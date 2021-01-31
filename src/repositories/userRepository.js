const User   = require('../models/users/user');
const bcrypt = require("bcryptjs");

class UserRepository {

    static async create(personalInfo) {
        
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;
        
        const user = User.create({
          username: personalInfo.username,
          email:    personalInfo.email,
          password: bcrypt.hashSync(password, salt),
        });

        return user;
    }

    static async getList() {
        const users = User.findAll();
        return users;
    }

    static async updateByID(userID, personalInfo) {

        const user = await User.findByPk(userID);
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;

        const newUserInfo = user.update({
            username: personalInfo.username,
            email:    personalInfo.email,
            password: bcrypt.hashSync(password, salt)
        })

        return newUserInfo;
    }

    static async deleteByID(userID) {
        const user = await User.findByPk(userID);
        await user.destroy();
    }

    static async getByID(userId) {
        return User.findOne({ where: { id: userId } });
    }

    static async getByEMail(email) {
        return User.findOne({ where: { email: email } });
    }

    static async getByUsername(username) {
        return User.findOne({ where: { username: username } });
    }

}

module.exports = UserRepository;
