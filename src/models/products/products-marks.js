const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const ProductsMarks = sequelize.define(
    'productsMarks',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        mark: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
            },
        },
    },
    {
        tableName: 'products_marks',
        timestamps: true,
        createdAt: false,
        updatedAt: true,
    },
);

ProductsMarks.associate = (models) => {
    models.Product.hasMany(models.ProductsMarks);
    models.User.hasMany(models.ProductsMarks);
    //models.ProductsMarks.belongsTo(models.User)
    //models.ProductsMarks.belongsTo(models.Product)
    //models.Product.belongsToMany(models.User, { through: models.ProductsMarks })
    //models.User.belongsToMany(models.Product, { through: models.ProductsMarks })
};

module.exports = ProductsMarks;
