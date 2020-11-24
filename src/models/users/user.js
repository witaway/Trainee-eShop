const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/database')

const User = sequelize.define('user', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    'username': {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    'email': {
        type: DataTypes.STRING,
        allowNull: false,
        uniqie: true,
        validate: {
            isEmail: true
        }
    },
    'password': {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
            min: 8
        }
    }
}, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    createdAt: true,
	updatedAt: false,
	deletedAt: true
})

User.associate = (models) => {
    models;
}

module.exports = User