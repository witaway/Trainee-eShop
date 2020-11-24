const Sequelize = require("sequelize");
 
const dbName = global.process.env.DB_NAME
const dbUser = global.process.env.DB_USER
const dbPass = global.process.env.DB_PASS
const dbHost = global.process.env.DB_HOST

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "mysql",
    host: dbHost,
});

sequelize.authenticate()
    .then(() => {
        console.log('INFO - Database connected')
    })
    .catch((err) => {
        console.log('Error - Unable to connect to the database: ', err)
    })

module.exports = sequelize