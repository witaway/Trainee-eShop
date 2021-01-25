const Sequelize = require('sequelize');

const dbConfig = require('./config/database.json');

const sequelize = new Sequelize(
    dbConfig.database, 
    dbConfig.username, 
    dbConfig.password, 
    {
        dialect: dbConfig.dialect,
        host:    dbConfig.host,
        logging: dbConfig.logging
    }
);

const connect = async () => {

    const models    = require('./models');

    await sequelize.authenticate();
    Object.values(models).forEach((model) => {
        model.associate && model.associate(models);
    })
    
    await sequelize.sync({ alter: true });
};

module.exports = { 
    sequelize,
    connect,
    Sequelize
};