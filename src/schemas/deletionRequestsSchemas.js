const Joi = require('Joi');

const id = Joi.number().integer().required();

module.exports = {

    getRequestsList: Joi.object({
        body: Joi.object({}),
        params: Joi.object({})
    }),

    getRequestByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id })
    }),

    acceptRequestByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id })
    }),

    deleteRequestByID: Joi.object({
        body: Joi.object({}),
        params: Joi.object({ id })
    }),

}