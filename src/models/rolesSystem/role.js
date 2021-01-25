const { DataTypes } = require('sequelize');
const sequelize     = require('../../loaders/database');

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
    indexes: [
        {uniqie: true, fields: ['name']},
    ],
    timestamps: false
});

Role.associate = (models) => {
    models;
};

module.exports = Role;