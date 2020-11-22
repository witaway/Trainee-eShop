const sequelize = require('../sequelize')
const models = require('../models')

Object.values(models).forEach((model) => {
    model.associate && model.associate(models)
})

sequelize.sync({ alter: true })