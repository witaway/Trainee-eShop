const Role = require('../models/rolesSystem/role');
const UsersRoles = require('../models/rolesSystem/usersRoles')

class RoleRepository {

    static async createRole(roleObject) {
        const role = await Role.create({
            'name': roleObject.name
        });
        return role;
    }

    static async getListOfRoles() {
        const roles = await Role.findAll({
            raw: true
        });
        return roles;
    }

    static async getRoleByID(roleID) {
        const role = await Role.findOne({
            attributes: [ 'id', 'name' ],
            where: {
                id: roleID
            }
        });
        return role;
    }

    static async getRoleByName(roleName) {
        const role = await Role.findOne({
            attributes: [ 'id', 'name' ],
            where: {
                name: roleName
            }
        });
        return role;
    }

    static async editRoleByID(roleID, roleObject) {
        const role = await Role.findByPk(roleID);
        const updated = await role.update({
            'name': roleObject.name
        });
        return updated;
    }

    static async deleteRoleByID(roleID) {
        await Role.destroy({
            where: {
                id: roleID
            }
        });
    }

    static async isRoleGivenToUser(userID, roleID) {
        const entry = await UsersRoles.findOne({
            with: {
                userId: userID,
                roleId: roleID
            }
        });
        return (entry ? true : false);
    }

    static async giveRoleToUser(userID, roleID) {
        await UsersRoles.create({
            userId: userID,
            roleId: roleID
        });
    }

    static async revokeRoleFromUser(userID, roleID) {
        await UsersRoles.destroy({
            where: {
                userId: userID,
                roleId: roleID
            }
        });
    }

}

module.exports = RoleRepository;
