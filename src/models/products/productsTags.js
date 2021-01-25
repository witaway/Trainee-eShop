const { DataTypes } = require('sequelize');
const sequelize     = require('../../loaders/database');

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
});

ProductsTags.associate = (models) => {
    models.Product.belongsToMany(models.Tag, { through: models.ProductsTags });
    models.Tag.belongsToMany(models.Product, { through: models.ProductsTags });
};

module.exports = ProductsTags;