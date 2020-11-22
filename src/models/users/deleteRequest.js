const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize')

const DeleteRequest = sequelize.define('deleteRequest', {
    'id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    'accepted': {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'delete_requests',
    timestamps: true,
    createdAt: true,
    updatedAt: false
})

//
DeleteRequest.associate = (models) => {
    DeleteRequest.hasOne(models.User)
}

module.exports = DeleteRequest