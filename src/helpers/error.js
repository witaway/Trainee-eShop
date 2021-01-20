function RequestError(status, message) {
    this.name = 'Error';
    this.message = message || 'Сообщение по умолчанию';
    this.stack = (new Error()).stack;
    this.status = status || 'Error';
  }

  RequestError.prototype = Object.create(Error.prototype);
  RequestError.prototype.constructor = RequestError;

  module.exports = RequestError