const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const Rout = sequelize.define('rout', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    'path': {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'routes',
    timestamps: false
})

Rout.associate = (models) => {
    models;
}

module.exports = Rout