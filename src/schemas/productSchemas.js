const Joi = require('Joi');

const id = Joi.number().integer().required();

const productObject = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    description: Joi.string().min(0).max(2000).default(''),
    image: Joi.string().uri().max(300).default(null),
    cost: Joi.number().min(0).precision(2).required(),
    quantity: Joi.number().integer().min(0).required()                
});

module.exports = {

    create: Joi.object({
        params: Joi.object({}),
        body: productObject
    }),

    getByID: Joi.object({
        params: Joi.object({ id }),
        body: Joi.object({})
    }),

    getWithList: Joi.object({
        params: Joi.object({}),
        body: Joi.object({
            sort_by: Joi.string().valid('none', 'name', 'date_of_update', 'cost'),
            order: Joi.string().valid('asc', 'desc').when('sort_by', {
                then: Joi.string().valid('asc', 'desc').required()
            }),
            only_with_pictures: Joi.boolean().default(false),
            count: Joi.number().integer(),
            offset: Joi.number().integer()    
        })
    }),

    editByID: Joi.object({
        params: Joi.object({ id }),
        body: productObject
    }),

    deleteByID: Joi.object({
        params: Joi.object({ id }),
        body: Joi.object({})
    })

}