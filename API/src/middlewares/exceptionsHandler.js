const { ReasonPhrases, StatusCodes } = require('http-status-codes')
const statusCodeMessages = require('../constants/statusCodeMessages')
const ResponseFormat = require('../helpers/responseFormat');
const createError = require('../logger').createError;

// eslint-disable-next-line no-unused-vars
const exceptionsHandler = async (err, req, res, next) => {
    
    await createError(req, err);
    
    //If it's expected exception with defined http code
    if(Object.values(ReasonPhrases).includes(err.name)) {
        // From my messages collection OR from standart reason messages list
        const message = err.message || statusCodeMessages[err.status] || ReasonPhrases[StatusCodes[err.status]];
        res.status(err.status).json(ResponseFormat.error(
            err.status, message, {
                name: err.name
            }
        ))
    //Or if it's totally unexpected and everything is BAD
    } else {
        res.status(500).json(ResponseFormat.error(
            500, "Unexpected error", {
                name: err.name,
                stack: err.stack
            }
        ))
    }
}

module.exports = exceptionsHandler;