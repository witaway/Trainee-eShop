const Joi = require('Joi')

module.exports = {

    get: Joi.object({
        body: Joi.object({}),
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    }),

    set: Joi.object({
        body: Joi.object({
            value: Joi.number().integer().min(1).max(5).required()
        }),
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    }),

    delete: Joi.object({
        body: Joi.object({}),
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    }),

    getAverage: Joi.object({
        body: Joi.object({}),
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    }),

    getAll: Joi.object({
        body: Joi.object({}),
        params: Joi.object({
            id: Joi.number().integer().required()
        })
    })

}