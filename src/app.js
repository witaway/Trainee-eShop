const express = require('express')
const server  = express()

const setupDotEnv         = require('./loaders/dotenv')
const setupModels         = require('./loaders/models')
const setupExpressModules = require('./loaders/expressModules')
const setupRoutes         = require('./loaders/routes')
const setupStartServer    = require('./loaders/startServer')

// Loads .env to process.environment
setupDotEnv()

// Makes all database stuff, loads models and associations between them
// Also only after setupModels() you can export anything from /models 
//               with confidence that everything will be fine
setupModels()

// Loads all server modules like logging, cookie parser and so on
// TO DO
setupExpressModules(server)

// Loads routes
setupRoutes(server)

// Start server 
setupStartServer(server)