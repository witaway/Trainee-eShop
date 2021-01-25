const sequelize = require('./database');
const models = require('../models');

const setupModels = () => {

    Object.values(models).forEach((model) => {
        model.associate && model.associate(models);
    })

    sequelize.sync({ alter: true });

};

module.exports = setupModels