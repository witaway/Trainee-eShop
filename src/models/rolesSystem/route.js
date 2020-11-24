const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/database')

const Route = sequelize.define('rout', {
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

Route.associate = (models) => {
    models;
}

module.exports = Route