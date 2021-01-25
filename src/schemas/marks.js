const Joi = require('Joi')

module.exports = {

    get: Joi.object({
        product_id: Joi.number().integer().required()
    }),

    set: Joi.object({
        product_id: Joi.number().integer().required(),
        value: Joi.number().integer().min(1).max(5).required()
    }),

    delete: Joi.object({
        product_id: Joi.number().integer().required()
    }),

    getAverage: Joi.object({
        product_id: Joi.number().integer().required()
    }),

    getAll: Joi.object({
        product_id: Joi.number().integer().required()
    })

}