const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const UsersRoles = sequelize.define(
    'usersRoles',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        tableName: 'users_roles',
        timestamps: false,
    },
);

UsersRoles.associate = (models) => {
    models.Role.belongsToMany(models.User, { through: models.UsersRoles });
    models.User.belongsToMany(models.Role, { through: models.UsersRoles });
};

module.exports = UsersRoles;
