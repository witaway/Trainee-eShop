const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const Role = sequelize.define('role', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false
})

Role.associate = (models) => {
    ///
}

module.exports = Role