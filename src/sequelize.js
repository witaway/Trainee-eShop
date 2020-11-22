const Sequelize = require("sequelize");
 
const dbName = global.process.env.DB_NAME
const dbUser = global.process.env.DB_USER
const dbPass = global.process.env.DB_PASS
const dbHost = global.process.env.DB_HOST

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "mysql",
    host: dbHost,
});

module.exports = sequelize