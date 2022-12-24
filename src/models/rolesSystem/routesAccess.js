const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const RoutesAccess = sequelize.define(
    'routesAccess',
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

RoutesAccess.associate = (models) => {
    models.Role.belongsToMany(models.Route, { through: models.RoutesAccess });
    models.Route.belongsToMany(models.Role, { through: models.RoutesAccess });
};

module.exports = RoutesAccess;
