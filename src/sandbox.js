const Joi = require("Joi")

const validator = Joi.object({
    a: Joi.string().default("Hey").required(),
    b: Joi.string().default("Yay")
})

let obj = {
    a: "1"
}

const result = validator.validate(obj)
console.log(result);