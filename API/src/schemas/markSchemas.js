const Joi = require('Joi');

const id = Joi.number().integer().required();
const markValue = Joi.number().integer().min(1).max(5).required();

module.exports = {

    get: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id })
    }),

    set: Joi.object({
        body: Joi.object({
            value: markValue
        }),
        params: Joi.object({ id })
    }),

    delete: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id })
    })

}