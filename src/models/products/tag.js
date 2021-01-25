const { DataTypes } = require('sequelize');
const sequelize     = require('../../loaders/database');

const Tag = sequelize.define('tag', {
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
    tableName: 'tags',
    timestamps: true,
    createdAt: true,
	updatedAt: false,
});

Tag.associate = (models) => {
    models;
};

module.exports = Tag;