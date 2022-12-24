const BadRequestException = require('./badRequestException');
const ConflictException = require('./conflictException');
const GoneException = require('./goneExcpetion');
const NotFoundException = require('./notFoundException');
const RetryWithException = require('./retryWithException');
const UnauthorizedException = require('./unauthorizedException');
const UnprocessableEntityException = require('./unprocessableEntityException');
const ForbiddenException = require('./forbiddenException');

module.exports = {
    ForbiddenException,
    BadRequestException,
    ConflictException,
    GoneException,
    NotFoundException,
    RetryWithException,
    UnauthorizedException,
    UnprocessableEntityException,
};
