module.exports = function() {

    const sequelize = require('./database')
    const models = require('../models')

    Object.values(models).forEach((model) => {
        model.associate && model.associate(models)
    })

    sequelize.sync({ force: true })

}