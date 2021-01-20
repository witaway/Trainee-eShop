const Joi = require('joi');

module.exports = function(schema) {
    return function(req, res, next) {
        const result = schema.validate(req.body)
        if(!result.error) {
            req.body = result.value
            next()
        } else {
            console.log('ITS IN VALIDATOR HELPER')
            console.log(result.error.details)
            res.status(400).json({
                message: result.error.details[0].message
            });
        }
    }
}