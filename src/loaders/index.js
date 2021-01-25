const initDotEnv         = require('./dotenvLoader');
const initExpressModules = require('./expressModulesLoader');
const initRoutes         = require('./routesLoader');
const initStartServer    = require('./startServerLoader');
const connect            = require('../sequelize').connect

const superLoader = async (server) => {

    // Loads .env to process.environment
    initDotEnv();

    // Makes all database stuff, loads models and associations between them
    // Also only after connect() you can export anything from /models 
    // with confidence that everything will be fine
    await connect();
    
    // Loads all server modules like logging, cookie parser and so on
    initExpressModules(server);
    
    // Loads routes
    initRoutes(server);
    
    // Start server 
    initStartServer(server);

}

module.exports = superLoader;