const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize').sequelize;

const DeletionRequest = sequelize.define(
    'deleteRequest',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        tableName: 'deletion_requests',
        timestamps: true,
        createdAt: true,
        updatedAt: false,
    },
);

//
DeletionRequest.associate = (models) => {
    models.User.hasOne(DeletionRequest);
};

module.exports = DeletionRequest;
