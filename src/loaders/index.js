module.exports = function setup(server, passport) {

    const setupDotEnv             = require('./dotenv')
    const setupModels             = require('./models')
    const setupExpressModules     = require('./expressModules')
    const setupRoutes             = require('./routes')
    const setupStartServer        = require('./startServer')
    const setupPassportStrategies = require('./passport')
    
    // Loads .env to process.environment
    setupDotEnv()
    
    // Makes all database stuff, loads models and associations between them
    // Also only after setupModels() you can export anything from /models 
    //               with confidence that everything will be fine
    setupModels()
    
    //Loads all passport strategies
    setupPassportStrategies(passport)
    
    // Loads all server modules like logging, cookie parser and so on
    // TO DO
    setupExpressModules(server, passport)
    
    // Loads routes
    setupRoutes(server)
    
    // Start server 
    setupStartServer(server)

}