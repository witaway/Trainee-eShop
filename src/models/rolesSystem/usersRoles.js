const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const UsersRoles = sequelize.define('usersRoles', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'users_roles',
    timestamps: false
})

UsersRoles.associate = (models) => {
    ///
}

module.exports = UsersRoles