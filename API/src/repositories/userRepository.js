const User   = require('../models/users/user');
const Role = require('../models/rolesSystem/role');
const bcrypt = require("bcryptjs");

class UserRepository {

    static async create(personalInfo) {
        
        const salt = bcrypt.genSaltSync(3);
        const password = personalInfo.password;
        
        const user = await User.create({
          username: personalInfo.username,
          email:    personalInfo.email,
          password: bcrypt.hashSync(password, salt),
        });

        return user;
    }

    static async getList() {
        const users = await User.findAll({
            attributes: [ 'id', 'username', 'email' ],
            include: [
                {
                    model: Role,
                    as: 'roles',
                    // Excluded UsersRoles mapping object from results, cool!
                    // https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object
                    through: { attributes: [] } 
                }
            ]
        });
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
        const user = await User.findOne({
            attributes: [ 'id', 'username', 'email' ],
            where: { id: userId },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    // Excluded UsersRoles mapping object from results, cool!
                    // https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object
                    through: { attributes: [] } 
                }
            ]
        });
        return user;
    }

    static async getByEMail(email) {
        const user = await User.findOne({
            attributes: [ 'id', 'username', 'email', 'password' ],
            where: { email: email },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    // Excluded UsersRoles mapping object from results, cool!
                    // https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object
                    through: { attributes: [] } 
                }
            ]
        });
        return user;
    }

    static async getByUsername(username) {
        const user = await User.findOne({
            attributes: [ 'id', 'username', 'email', 'password' ],
            where: { username: username },
            include: [
                {
                    model: Role,
                    as: 'roles',
                    // Excluded UsersRoles mapping object from results, cool!
                    // https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object
                    through: { attributes: [] } 
                }
            ]
        });
        return user;
    }

}

module.exports = UserRepository;
