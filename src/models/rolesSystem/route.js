const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const Route = sequelize.define(
    'route',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'routes',
        indexes: [{ uniqie: true, fields: ['path'] }],
        timestamps: false,
    },
);

Route.associate = (models) => {
    models;
};

module.exports = Route;
