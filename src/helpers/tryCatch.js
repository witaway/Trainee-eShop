// tryCatch wrapper for controllers  
module.exports = function tryCatch(func) {

    const { ReasonPhrases, StatusCodes } = require('http-status-codes')
    const statusCodeMessages = require('../constants/statusCodeMessages')

    return async function(req, res) {
        const p = func(req, res) // func is async!
        p.catch((error) => {            
            //If it's expected exception with defined http code
            if(Object.keys(ReasonPhrases).includes(error.name)) {
                // From my messages collection OR from standart reason messages list
                const message = statusCodeMessages[error.status] || ReasonPhrases[StatusCodes[error.status]]
                res.error(error.status, message, {
                    name: error.name
                })
            //Or if it's totally unexpected and everything is BAD
            } else {
                res.error(500, 'Unexpected error', {
                    name: error.name,
                    stack: error.stack
                })
            }
        })
    }
}