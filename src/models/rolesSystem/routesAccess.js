const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const RoutesAccess = sequelize.define('routesAccess', {
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

RoutesAccess.associate = (models) => {
    models.Role.belongsToMany(models.Rout, { through: models.RoutesAccess })
    models.Rout.belongsToMany(models.Role, { through: models.RoutesAccess })
}

module.exports = RoutesAccess