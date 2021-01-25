function createErrorObject(statusCode) {

    const { getReasonPhrase } = require('http-status-codes')

    function RequestError(message) {
        this.name    = getReasonPhrase(statusCode);
        this.message = message || 'Blank message (it shouldn\'t be like that)';
        this.stack   = (new Error()).stack;
        this.status  = statusCode;
      }
    
      RequestError.prototype = Object.create(Error.prototype);
      RequestError.prototype.constructor = RequestError;

      return RequestError
}

module.exports = {
    BadRequest:          createErrorObject(400),
    Unauthorized:        createErrorObject(401),
    NotFound:            createErrorObject(404),
    Conflict:            createErrorObject(409),
    Gone:                createErrorObject(410),
    UnprocessableEntity: createErrorObject(422),
    RetryWith:           createErrorObject(449),
    InternalServerError: createErrorObject(500),
    NotImplemented:      createErrorObject(501)
}