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
    ///
}

module.exports = Favourites