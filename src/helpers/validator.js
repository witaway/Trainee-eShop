const Joi = require('joi');

module.exports = function(schema) {
    return function(req, res, next) {
        const validation = schema.validate(req.body)
        if(!validation.error) {
            next()
        } else {
            console.log('ITS IN VALIDATOR HELPER')
            console.log(validation.error.details)
            res.status(400).json({
                message: validation.error.details[0].message
            });
        }
    }
}