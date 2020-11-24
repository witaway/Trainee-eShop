const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/database')

const Product = sequelize.define('product', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    'name': {
        type: DataTypes.STRING,
        allowNull: false
    },
    'description': {
        type: DataTypes.TEXT,
        defaultValue: null
    },
    'imageUrl': {
        type: DataTypes.STRING(500),
        field: 'image_url',
        defaultValue: null
    },
    'cost': {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
    },
    'quantity': {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'products',
    paranoid: true,
    timestamps: true,
    createdAt: true,
	updatedAt: true,
	deletedAt: true
})

Product.associate = (models) => {
    models;
}

module.exports = Product