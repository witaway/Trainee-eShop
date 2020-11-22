const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const Favourites = sequelize.define('favourites', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'favourites',
    timestamps: false,
})

Favourites.associate = (models) => {
    models.Product.belongsToMany(models.User, { through: models.Favourites })
    models.User.belongsToMany(models.Product, { through: models.Favourites })
}

module.exports = Favourites