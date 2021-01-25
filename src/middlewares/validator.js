const Joi = require('joi');

module.exports = function(schema) {
    return function(req, res, next) {
        const result = schema.validate({
            body: req.body,
            params: req.params
        })
        if(!result.error) {
            req.body = result.value.body
            req.params = result.value.params
            next()
        } else {
            res.error(400, "Request format error", result.error.details[0].message)
        }
    }
}