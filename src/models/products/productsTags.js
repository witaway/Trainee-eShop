const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const ProductsTags = sequelize.define('productsTags', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'products_tags',
    timestamps: false,
})

ProductsTags.associate = (models) => {
    ///
}

module.exports = ProductsTags