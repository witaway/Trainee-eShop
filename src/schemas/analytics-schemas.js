const Joi = require('Joi');

module.exports = {
    getProduct: Joi.object({
        body: Joi.object({}),
        params: Joi.object({
            year: Joi.number().integer().required(),
            month: Joi.number().integer().required(),
        }),
    }),

    getUser: Joi.object({
        body: Joi.object({}),
        params: Joi.object({}),
    }),
};
